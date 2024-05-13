import React, { useState } from "react";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import TutorialContent from "../TutorialContent";
import TutorialCode from "../TutorialCode";
import TutorialBox from "../TutorialBox";
import TutorialFooter from "../TutorialFooter";

const React_Useeffect = () => {
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

  const reactCode2 = `import { useState, useEffect } from "react";
  import ReactDOM from "react-dom/client";
  
  function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []); // <- add empty brackets here
  
    return <h1>I've rendered {count} times!</h1>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Timer />);
  
  Example:
  Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:
  
  import { useState, useEffect } from "react";
  import ReactDOM from "react-dom/client";
  
  function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Counter />);`;

  return (
    <Box>
      <Divider sx={{ my: 1 }} />
      <TutorialContent
        content={
          "The useEffect Hook allows you to perform side effects in your components."
        }
      />
      <TutorialContent
        content={
          "Some examples of side effects are: fetching data, directly updating the DOM, and timers."
        }
      />
      <TutorialContent
        content={
          "useEffect accepts two arguments. The second argument is optional."
        }
      />
      <TutorialContent content={"useEffect(function, dependency)"} />
      <TutorialBox Content={"Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:"}/>
      <Divider sx={{ my: 1 }} />
      <TutorialCode code={reactCode2} />
      <TutorialFooter
        message={message}
        completion={completion}
        toggleCompletion={toggleCompletion}
      />
    </Box>
  );
};

export default React_Useeffect;
