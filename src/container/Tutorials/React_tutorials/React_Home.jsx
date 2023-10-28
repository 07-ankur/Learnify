import React, { useState } from "react";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import ContainedButton from "../../../components/Buttons/Contained_btn";
import img1 from "../../../assets/images/Tutorials/React/Home_1.png";
import OutlinedButton from "../../../components/Buttons/OutlinedButton";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';

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
  const uninstallCreateReactApp = "Note: If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app. To uninstall, run this command: npm uninstall -g create-react-app.";
  const cdCommand = "cd my-react-app";
  const npmStartCommand = "npm start";

  const renderHTML = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <Box>
      <Box sx={{ mt: 2 }}>
        <Divider sx={{ my: 1 }} />
        <Typography variant="h5" sx={{ mx: 5, my: 2, lineHeight: "180%" }}>
          React is a JavaScript library for building user interfaces.
          <br />
          React is used to build single-page applications.
          <br />
          React allows us to create reusable UI components.
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography
          variant="h4"
          sx={{ mx: 5, color: "#37fb68", lineHeight: "250%" }}
        >
          Learning by Examples
        </Typography>
        <Box
          sx={{
            ml: 5,
            mr: 10,
            mb: 2,
            bgcolor: "#192734",
            borderRadius: "1em",
          }}
        >
          <Typography variant="h5" sx={{ mx: 2, my: 1, lineHeight: "150%" }}>
            <pre>{reactCode}</pre>
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Typography
          variant="h4"
          sx={{ mx: 5, color: "#37fb68", lineHeight: "250%" }}
        >
          Create React App
        </Typography>
        <Typography variant="h5" sx={{ mx: 5, mb: 2, lineHeight: "180%" }}>
          To learn and test React, you should set up a React Environment on your
          computer.
          <br />
          This tutorial uses the create-react-app.
          <br />
          The create-react-app tool is an officially supported way to create
          React applications.
          <br />
          Node.js is required to use create-react-app.
          <br />
          Open your terminal in the directory you would like to create your
          application.
          <br />
          Run this command to create a React application named my-react-app:
        </Typography>
        <Box
          sx={{
            ml: 5,
            mr: 10,
            mb: 2,
            px: 2,
            py: 0.5,
            bgcolor: "#192734",
            borderRadius: "1em",
          }}
        >
          <Typography
            variant="h5"
            sx={{ mx: 4, mt: 2, mb: 2, lineHeight: "150%" }}
          >
            {createReactAppCode}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ my: 2, mx: 4, p: 1, borderRadius: "1em", bgcolor: "#FFF4A3" }}>
        <Typography
          variant="h5"
          sx={{ mx: 4, mt: 2, mb: 2, lineHeight: "150%", color:'black' }}
        >
          {uninstallCreateReactApp}
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Typography
        variant="h4"
        sx={{ mx: 5, color: "#37fb68", lineHeight: "250%" }}
      >
        Run the React Application
      </Typography>
      <Typography variant="h5" sx={{ mx: 5, mb: 2, lineHeight: "180%" }}>
        Run this command to move to the my-react-app directory:
      </Typography>
      <Box
        sx={{
          ml: 5,
          mr: 10,
          mb: 2,
          px: 2,
          py: 0.5,
          bgcolor: "#192734",
          borderRadius: "1em",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mx: 4, mt: 2, mb: 2, lineHeight: "150%" }}
        >
          {cdCommand}
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ mx: 5, mb: 2, lineHeight: "180%" }}>
        Run this command to execute the React application my-react-app:
      </Typography>
      <Box
        sx={{
          ml: 5,
          mr: 10,
          mb: 4,
          px: 2,
          py: 0.5,
          bgcolor: "#192734",
          borderRadius: "1em",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mx: 4, mt: 2, mb: 2, lineHeight: "150%" }}
        >
          {npmStartCommand}
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ mx: 5, mb: 2, lineHeight: "180%" }}>
        A new browser window will pop up with your newly created React App! If
        not, open your browser and type localhost:3000 in the address bar.
        <br />
        <br />
        The result:
      </Typography>
      <Box sx={{ mx: 5, mb: 2 }}>
        <img src={img1} alt="img" />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          width: "85%",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      > 
        {completion ? <ChecklistIcon sx={{ color: "#37fb68", mx: 1 }} /> : <AlignHorizontalLeftIcon sx={{ color: "yellow", mx: 1 }}/>}
        <Typography variant="h4" sx={{ color: completion?"#37fb68":"#FFF4A3" }}>
          {completion?'Completed':'Not Completed'}
        </Typography>
        {completion ? <ChecklistRtlIcon sx={{ color: "#37fb68", mx: 1 }} /> : <AlignHorizontalRightIcon sx={{ color: "yellow", mx: 1 }}/>}
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "85%",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <ContainedButton arrowRev sx={{ mb: 2, mx: 2, color: "black" }} fit>
          Prev
        </ContainedButton>
        <OutlinedButton
          sx={{ width: "30%", color: completion ? "yellow" : "#37fb68" }}
          onClick={toggleCompletion}
        >
          {message}
        </OutlinedButton>
        <ContainedButton arrow sx={{ mb: 2, mx: 2, color: "black" }} fit>
          Next
        </ContainedButton>
      </Box>
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};

export default React_Home;
