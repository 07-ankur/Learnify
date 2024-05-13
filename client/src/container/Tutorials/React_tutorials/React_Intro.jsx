import React, { useState } from "react";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import TutorialTopic from "../TutorialTopic";
import TutorialContent from "../TutorialContent";
import TutorialCode from "../TutorialCode";
import TutorialBox from "../TutorialBox";
import TutorialFooter from "../TutorialFooter";

const React_Intro = () => {
  const [completion, setCompletion] = useState(false);
  const [message, setMessage] = useState("Mark as completed !!");

  const toggleCompletion = () => {
    if (!completion) {
      setCompletion(true);
      setMessage("Still not completed!!");
    } else {
      setCompletion(false);
      setMessage("Mark as completed!!");
    }
  };
  return (
    <Box>
      <Box sx={{ mt: 2 }}>
        <Divider sx={{ my: 1 }} />
        <TutorialTopic topic={'What is React?'}/>
        <TutorialContent
          content={`React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
          <br />
          React is a tool for building UI components.`}
        />
        <Divider sx={{ my: 1 }} />
        <TutorialTopic topic={"How does React Work?"} />
        <TutorialBox Content={"React creates a VIRTUAL DOM in memory."} />
        <TutorialContent
          content={
            "Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."
          }
        />
        <TutorialBox Content={"React only changes what needs to be changed!"} />
        <TutorialContent
          content={
            "React finds out what changes have been made, and changes only what needs to be changed. <br /> You will learn the various aspects of how React does this in the rest of this tutorial."
          }
        />
        <Divider sx={{ my: 1 }} />
        <TutorialTopic topic={"REACT JS History"} />
        <TutorialContent
          content={`Current version of React.JS is V18.0.0 (April 2022).
          <br />
          Initial Release to the Public (V0.3.0) was in July 2013.
          <br />
          React.JS was first used in 2011 for Facebook's Newsfeed feature.
          <br />
          Facebook Software Engineer, Jordan Walke, created it.
          <br />
          Current version of create-react-app is v5.0.1 (April 2022).
          <br />
          create-react-app includes built tools such as webpack, Babel, and
          ESLint.`}
        />
      </Box>
      <TutorialFooter
        message={message}
        completion={completion}
        toggleCompletion={toggleCompletion}
      />
    </Box>
  );
};

export default React_Intro;
