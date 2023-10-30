import React, { useState } from "react";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import TutorialTopic from "../TutorialTopic";
import TutorialContent from "../TutorialContent";
import TutorialCode from "../TutorialCode";
import TutorialBox from "../TutorialBox";
import TutorialFooter from "../TutorialFooter";

const React_GetStarted = () => {
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

  const reactCode=`<!DOCTYPE html>
  <html>
    <head>
      <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    </head>
    <body>
  
      <div id="mydiv"></div>
  
      <script type="text/babel">
        function Hello() {
          return <h1>Hello World!</h1>;
        }
  
        const container = document.getElementById('mydiv');
        const root = ReactDOM.createRoot(container);
        root.render(<Hello />)
      </script>
  
    </body>
  </html>`

  const reactCode1 = `function App() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
  
  export default App;`

  return (
    <Box>
      <Divider sx={{ my: 1 }} />
      <TutorialBox Content={'To use React in production, you need npm which is included with Node.js.'}/>
      <TutorialContent content={'To get an overview of what React is, you can write React code directly in HTML.<br/> But in order to use React in production, you need npm and Node.js installed.'}/>
      <Divider sx={{ my: 1 }} />
      <TutorialTopic topic={'React Directly in HTML'}/>
      <TutorialContent content={'The quickest way start learning React is to write React directly in your HTML files.'}/>
      <TutorialContent content={'Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.<br/>You will learn more about JSX in the React JSX chapter.'}/>
      <TutorialContent content={`Example<br/>Include three CDN's in your HTML file:`}/>
      <TutorialCode code={reactCode}/>
      <TutorialContent content={'Try changing the HTML content and save the file.'}/>
      <TutorialBox Content={'Notice that the changes are visible immediately after you save the file, you do not have to reload the browser!'}/>
      <TutorialContent content={'Example<br/>Replace all the content inside the div className="App" with a h1 element.<br/>See the changes in the browser when you click Save.'}/>
      <TutorialCode code={reactCode1}/>
      <TutorialBox Content={'Notice that we have removed the imports we do not need (logo.svg and App.css).'}/>
      <TutorialContent content={'The result:'}/>
      <TutorialFooter
        message={message}
        completion={completion}
        toggleCompletion={toggleCompletion}
      />
    </Box>  
  );
};

export default React_GetStarted;
