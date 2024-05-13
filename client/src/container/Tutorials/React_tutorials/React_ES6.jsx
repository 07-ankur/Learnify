import React, { useState } from "react";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import TutorialTopic from "../TutorialTopic";
import TutorialContent from "../TutorialContent";
import TutorialCode from "../TutorialCode";
import TutorialBox from "../TutorialBox";
import TutorialFooter from "../TutorialFooter";
import img1 from "../../../assets/images/Tutorials/React/GetStarted_1.png";
import img2 from "../../../assets/images/Tutorials/React/GetStarted_2.png";

const React_ES6 = () => {
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

  const reactCode = `<!DOCTYPE html>
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
  </html>`;

  const reactCode1 = `function App() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
  
  export default App;`;

  const reactCode2 = `import logo from './logo.svg';
  import './App.css';
  
  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
  export default App;`;

  const reactCode3 = `import React from 'react';
  import ReactDOM from 'react-dom/client';
  
  const myFirstElement = <h1>Hello React!</h1>
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(myFirstElement);`;

  return (
    <Box>
      <Divider sx={{ my: 1 }} />
      <TutorialTopic topic={"What is ES6?"} />
      <TutorialContent
        content={
          "ES6 stands for ECMAScript 6."
        }
      />
      <TutorialContent
        content={
          "ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015."
        }
      />
      <Divider sx={{ my: 1 }} />
      <TutorialTopic topic={"Classes"} />
      <TutorialContent
        content={
          "A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method."
        }
      />
      {/* <TutorialContent
        content={`Example<br/>Include three CDN's in your HTML file:`}
      />
      <TutorialCode code={reactCode} />
      <TutorialContent
        content={
          "This way of using React can be OK for testing purposes, but for production you will need to set up a React environment."
        }
      />
      <Divider sx={{ my: 1 }} />
      <TutorialTopic topic={"Setting up a React Environment"} />
      <TutorialContent
        content={
          "If you have npx and Node.js installed, you can create a React application by using create-react-app."
        }
      />

      <TutorialBox
        Content={
          "If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app. To uninstall, run this command: npm uninstall -g create-react-app."
        }
      />
      <TutorialContent
        content={
          "To uninstall, run this command: npm uninstall -g create-react-app."
        }
      />
      <TutorialCode code={"npx create-react-app my-react-app"} />
      <TutorialContent
        content={
          "The create-react-app will set up everything you need to run a React application."
        }
      />
      <Divider sx={{ my: 1 }} />
      <TutorialTopic topic={"Run the React Application"} />
      <TutorialContent
        content={
          "Now you are ready to run your first real React application!<br/> Run this command to move to the my-react-app directory:"
        }
      />
      <TutorialCode code={"cd my-react-app"} />
      <TutorialContent
        content={"Run this command to run the React application my-react-app:"}
      />
      <TutorialCode code={"npm start"} />
      <TutorialContent
        content={
          "A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.<br/>The result:"
        }
      />
      <Box sx={{ mx: 5, mb: 2 }}>
        <img src={img1} alt="img" />
      </Box>
      <Divider sx={{ my: 1 }} />
      <TutorialTopic topic={"Modify the React Application"} />
      <TutorialContent
        content={
          "So far so good, but how do I change the content? <br/>Look in the my-react-app directory, and you will find a src folder. Inside the src folder there is a file called App.js, open it and it will look like this:"
        }
      />
      <TutorialCode code={reactCode2} />
      <TutorialContent
        content={"Try changing the HTML content and save the file."}
      />
      <TutorialBox
        Content={
          "Notice that the changes are visible immediately after you save the file, you do not have to reload the browser!"
        }
      />
      <TutorialContent
        content={
          'Example<br/>Replace all the content inside the div className="App" with a h1 element.<br/>See the changes in the browser when you click Save.'
        }
      />
      <TutorialCode code={reactCode1} />
      <TutorialBox
        Content={
          "Notice that we have removed the imports we do not need (logo.svg and App.css)."
        }
      />
      <TutorialContent content={"The result:"} />
      <Box sx={{ mx: 5, mb: 2 }}>
        <img src={img2} alt="img" />
      </Box>
      <Divider sx={{ my: 1 }} />
      <TutorialTopic topic={"What's Next?"} />
      <TutorialContent
        content={
          'Now you have a React Environment on your computer, and you are ready to learn more about React.<br/> In the rest of this tutorial we will use our "Show React" tool to explain the various aspects of React, and how they are displayed in the browser.<br/> If you want to follow the same steps on your computer, start by stripping down the src folder to only contain one file: index.js. You should also remove any unnecessary lines of code inside the index.js file to make them look like the example in the "Show React" tool below:'
        }
      />
      <TutorialContent
        content={
          'Example<br/> Click the "Run Example" button to see the result.<br/> index.js:'
        }
      />
      <TutorialCode code={reactCode3}/> */}
      <TutorialFooter
        message={message}
        completion={completion}
        toggleCompletion={toggleCompletion}
      />
    </Box>
  );
};

export default React_ES6;
