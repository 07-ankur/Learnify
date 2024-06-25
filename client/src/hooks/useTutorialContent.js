import { useState, useEffect } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { Tutorials_URL } from "../api";

const useTutorialContent = (title, topic) => {
  const [tutorial, setTutorial] = useState(null);
  const [tutorialTopics, setTutorialTopics] = useState([]);
  const [completion, setCompletion] = useState(false);
  const [message, setMessage] = useState("Mark as completed!!");
  const [tutorialLoading, setTutorialLoading] = useState(true);
  const [completionLoading, setCompletionLoading] = useState(true); 
  const [user, setUser] = useState(null);
  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get("jwt_token");
    if (token) {
      const decodedToken = jwtDecode(token.toString());
      const newUser = {
        email: decodedToken.email,
      };

      if (JSON.stringify(user) !== JSON.stringify(newUser)) {
        setUser(newUser);
      }
    }
  }, [cookies, user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTutorialLoading(true);
        const [topicsResponse, tutorialResponse] = await Promise.all([
          axios.get(Tutorials_URL.Tutorial_Topic(title)),
          axios.get(Tutorials_URL.Tutorial(topic, title)),
        ]);
        setTutorialTopics(topicsResponse.data);
        setTutorial(tutorialResponse.data);
      } catch (error) {
        console.error("Error fetching tutorial data:", error);
      } finally {
        setTutorialLoading(false);
      }
    };

    fetchData();
  }, [title, topic]);

  useEffect(() => {
    const fetchTutorialCompletion = async () => {
      if (!user) return;
      try {
        const response = await axios.get(
          Tutorials_URL.GetCompletion_Tutorial(title, topic)
        );
        const users = response.data.users;
        if (users.includes(user.email)) {
          setCompletion(true);
          setMessage("Still not completed!!");
        } else {
          setCompletion(false);
          setMessage("Mark as completed!!");
        }
      } catch (error) {
        console.error("Error fetching tutorial completion status:", error);
      } finally {
        setCompletionLoading(false);
      }
    };

    fetchTutorialCompletion();
  }, [title, topic, user]);

  const toggleCompletion = async () => {
    if (!user) return;
    try {
      setCompletionLoading(true);
      const response = await axios.post(Tutorials_URL.PostCompletion_Tutorial, {
        userID: user.email,
        title,
        topic,
        completion: !completion,
      });

      if (response.status === 200) {
        setCompletion(!completion);
        setMessage(
          completion ? "Mark as completed!!" : "Still not completed!!"
        );
      }
    } catch (error) {
      console.error("Error toggling completion status:", error);
    } finally {
      setCompletionLoading(false);
    }
  };

  return {
    tutorial,
    tutorialTopics,
    completion,
    message,
    tutorialLoading,
    completionLoading,
    toggleCompletion,
  };
};

export default useTutorialContent;
