import React, { useState, useEffect } from "react";
import axios from "axios";
import { Divider } from "@mui/material";
import TutorialTopic from "../TutorialTopic";
import TutorialContent from "../TutorialContent";
import TutorialCode from "../TutorialCode";
import TutorialBox from "../TutorialBox";
import TutorialFooter from "../TutorialFooter";
import { React_JS_Tutorials_URL } from "../../../api";

const React_Usecontext = () => {
  const [tutorial, setTutorial] = useState(null);
  const [completion, setCompletion] = useState(false);
  const [message, setMessage] = useState("Mark as completed !!");
  const {Use_Context} = React_JS_Tutorials_URL;

  const toggleCompletion = () => {
    if (!completion) {
      setCompletion(true);
      setMessage("Still not completed!!");
    } else {
      setCompletion(false);
      setMessage("Mark as completed!!");
    }
  };

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        const response = await axios.get(Use_Context);
        setTutorial(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching tutorial:", error);
      }
    };

    fetchTutorial();
  }, []);

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

export default React_Usecontext;
