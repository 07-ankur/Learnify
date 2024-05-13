import React, { useState } from "react";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import TutorialTopic from "../TutorialTopic";
import TutorialContent from "../TutorialContent";
import TutorialCode from "../TutorialCode";
import TutorialBox from "../TutorialBox";
import TutorialFooter from "../TutorialFooter";

const React_WhatIsAHook = () => {
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

  const reactCode2 = `import { useState } from "react";
  import ReactDOM from "react-dom/client";
  
  function FavoriteColor() {
    const [color, setColor] = useState("red");
  
    return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
      </>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<FavoriteColor />);`;

  return (
    <Box>
      <Divider sx={{ my: 1 }} />
      <TutorialContent
        content={
          "Hooks were added to React in version 16.8."
        }
      />
      <TutorialContent
        content={
          "Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed."
        }
      />
      <Divider sx={{ my: 1 }} />
      <TutorialTopic topic={"What is a Hook?"} />
      <TutorialContent
        content={
          "Hooks allow us to hook into React features such as state and lifecycle methods."
        }
      />
      <Divider sx={{ my: 1 }} />
      <TutorialTopic topic={"Hook Rules"} />
      <TutorialContent
        content={
          "There are 3 rules for hooks:"
        }
      />
      <TutorialContent
        content={
          "-> Hooks can only be called inside React function components."
        }
      />
      <TutorialContent
        content={
          "-> Hooks can only be called at the top level of a component."
        }
      />
      <TutorialContent
        content={
          "-> Hooks cannot be conditional"
        }
      />
      <TutorialFooter
        message={message}
        completion={completion}
        toggleCompletion={toggleCompletion}
      />
    </Box>
  );
};

export default React_WhatIsAHook;
