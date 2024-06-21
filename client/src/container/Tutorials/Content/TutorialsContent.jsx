import React, { useState, useEffect } from "react";
import axios from "axios";
import { Divider, Box } from "@mui/material";
import TutorialTopic from "../Structure/TutorialTopic";
import TutorialContent from "../Structure/TutorialContent";
import TutorialCode from "../Structure/TutorialCode";
import TutorialBox from "../Structure/TutorialBox";
import TutorialFooter from "../Structure/TutorialFooter";
import { Tutorials_URL } from "../../../api";
import { Cookies } from "react-cookie";
import {jwtDecode} from "jwt-decode";

const Tutorials_Content = (props) => {
  const { topic, title } = props;
  const [tutorial, setTutorial] = useState(null);
  const [completion, setCompletion] = useState(false);
  const [message, setMessage] = useState("Mark as completed!!");
  const cookies = new Cookies();
  const [user, setUser] = useState(null);

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
    const fetchTutorialCompletion = async () => {
      try {
        const response = await axios.get(
          Tutorials_URL.GetCompletion_Tutorial(title, topic)
        );
        const users = response.data.users;

        if (user && users.includes(user.email)) {
          setCompletion(true);
          setMessage("Still not completed!!");
        } else {
          setCompletion(false);
          setMessage("Mark as completed!!");
        }
      } catch (error) {
        console.error("Error fetching tutorial completion status:", error);
      }
    };

    if (user) {
      fetchTutorialCompletion();
    }
  }, [title, topic, user, completion]);

  const toggleCompletion = async () => {
    if (!user) return;

    try {
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
    }
  };

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await axios.get(Tutorials_URL.Tutorial(topic, title));
        setTutorial(response.data);
      } catch (error) {
        console.error("Error fetching tutorial:", error);
      }
    };

    fetchTutorial();
  }, [topic, title]);

  return (
    <div>
      {tutorial && (
        <div>
          {tutorial.sections?.map((section) => (
            <div key={section.key}>
              {section.divider === "top" && <Divider sx={{ my: 1 }} />}
              {section.type === "topic" && (
                <TutorialTopic topic={section.content} />
              )}
              {section.type === "content" && (
                <TutorialContent content={section.content} />
              )}
              {section.type === "code" && (
                <TutorialCode code={section.content} />
              )}
              {section.type === "box" && (
                <TutorialBox content={section.content} />
              )}
              {section.type === "image" && (
                <Box sx={{ mx: 5, my: 2 }}>
                  <img src={section.content} alt="img" />
                </Box>
              )}
              {section.divider === "bottom" && <Divider sx={{ my: 1 }} />}
            </div>
          ))}
        </div>
      )}
      <TutorialFooter
        message={message}
        completion={completion}
        toggleCompletion={toggleCompletion}
      />
    </div>
  );
};

export default Tutorials_Content;
