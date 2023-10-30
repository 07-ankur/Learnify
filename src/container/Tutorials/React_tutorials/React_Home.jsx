import React, { useState } from "react";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import TutorialTopic from "../TutorialTopic";
import TutorialContent from "../TutorialContent";
import TutorialCode from "../TutorialCode";
import TutorialBox from "../TutorialBox";
import TutorialFooter from "../TutorialFooter";
import img1 from "../../../assets/images/Tutorials/React/Home_1.png";

const React_Home = () => {
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
  const reactCode = `
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    function Hello(props) {
      return <h1>Hello World!</h1>;
    }
    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(<Hello />);
  `;

  const createReactAppCode = "npx create-react-app my-react-app";
  const uninstallCreateReactApp =
    "Note: If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app. To uninstall, run this command: npm uninstall -g create-react-app.";
  const cdCommand = "cd my-react-app";
  const npmStartCommand = "npm start";

  return (
    <Box>
      <Box sx={{ mt: 2 }}>
        <Divider sx={{ my: 1 }} />
        <TutorialContent
          content={`React is a JavaScript library for building user interfaces. <br/> React is used to build single-page applications. <br/> React allows us to create reusable UI components.`}
        />
        <Divider sx={{ my: 1 }} />
        <TutorialTopic topic={"Learning By Examples"} />
        <TutorialCode code={reactCode} />
        <Divider sx={{ my: 1 }} />
        <TutorialTopic topic={"Create React App"} />
        <TutorialContent
          content={`To learn and test React, you should set up a React Environment on your computer. <br /> 
          This tutorial uses the create-react-app. <br /> 
          The create-react-app tool is an officially supported way to create React applications. <br />
          Node.js is required to use create-react-app. <br />
          Open your terminal in the directory you would like to create your
          application. <br />
          Run this command to create a React application named my-react-app:`}
        />
        <TutorialCode code={createReactAppCode} />
      </Box>
      <TutorialBox Content={uninstallCreateReactApp} />
      <Divider sx={{ my: 2 }} />
      <TutorialTopic topic={"Run the React Application"} />
      <TutorialContent
        content={"Run this command to move to the my-react-app directory:"}
      />
      <TutorialCode code={cdCommand} />
      <TutorialContent
        content={
          "Run this command to execute the React application my-react-app:"
        }
      />
      <TutorialCode code={npmStartCommand} />
      <TutorialContent
        content={`A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.<br/><br/> The result:`}
      />
      <Box sx={{ mx: 5, mb: 2 }}>
        <img src={img1} alt="img" />
      </Box>
      <TutorialFooter
        message={message}
        completion={completion}
        toggleCompletion={toggleCompletion}
      />
    </Box>
  );
};

export default React_Home;
