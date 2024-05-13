import React, { useState } from "react";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import TutorialTopic from "../TutorialTopic";
import TutorialContent from "../TutorialContent";
import TutorialCode from "../TutorialCode";
import TutorialBox from "../TutorialBox";
import TutorialFooter from "../TutorialFooter";

const React_Usestate = () => {
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
      <TutorialTopic topic={"Usestate Hook"} />
      <TutorialContent
        content={
          "The React useState Hook allows us to track state in a function component."
        }
      />
      <TutorialContent
        content={
          "State generally refers to data or properties that need to be tracking in an application."
        }
      />
      <Divider sx={{ my: 1 }} />
      <TutorialTopic topic={"Initialize useState"} />
      <TutorialContent
        content={
          "We initialize our state by calling useState in our function component."
        }
      />
      <TutorialContent
        content={
          "useState accepts an initial state and returns two values:"
        }
      />
      <TutorialContent
        content={
          "-> The current state"
        }
      />
        <TutorialContent
          content={
            "-> A function that updates the state."
          }
        />
      <Divider sx={{ my: 1 }} />
      <TutorialTopic topic={"Update State"} />
      <TutorialContent
        content={
          "To update our state, we use our state updater function."
        }
      />
      <TutorialBox
        Content={
          "We should never directly update state. Ex: color = 'red' is not allowed."
        }
      />
        <TutorialCode code={reactCode2} />
      <TutorialFooter
        message={message}
        completion={completion}
        toggleCompletion={toggleCompletion}
      />
    </Box>
  );
};

export default React_Usestate;
