import React, { useState } from "react";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import ContainedButton from "../../../components/Buttons/Contained_btn";
import OutlinedButton from "../../../components/Buttons/OutlinedButton";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";

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
        <Typography
          variant="h4"
          sx={{ mx: 5, color: "#37fb68", lineHeight: "220%" }}
        >
          What is React?
        </Typography>
        <Typography variant="h5" sx={{ mx: 5, mb: 2, lineHeight: "180%" }}>
          React, sometimes referred to as a frontend JavaScript framework, is a
          JavaScript library created by Facebook.
          <br />
          React is a tool for building UI components.
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography
          variant="h4"
          sx={{ mx: 5, color: "#37fb68", lineHeight: "220%" }}
        >
          How does React Work?
        </Typography>
        <Box
          sx={{ my: 2, mx: 4, p: 1, borderRadius: "1em", bgcolor: "#FFF4A3" }}
        >
          <Typography
            variant="h5"
            sx={{ mx: 4, mt: 2, mb: 2, lineHeight: "150%", color: "black" }}
          >
            React creates a VIRTUAL DOM in memory.
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ mx: 5, mb: 2, lineHeight: "180%" }}>
          Instead of manipulating the browser's DOM directly, React creates a
          virtual DOM in memory, where it does all the necessary manipulating,
          before making the changes in the browser DOM.
        </Typography>
        <Box
          sx={{ my: 2, mx: 4, p: 1, borderRadius: "1em", bgcolor: "#FFF4A3" }}
        >
          <Typography
            variant="h5"
            sx={{ mx: 4, mt: 2, mb: 2, lineHeight: "150%", color: "black" }}
          >
            React only changes what needs to be changed!
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ mx: 5, mb: 2, lineHeight: "180%" }}>
          React finds out what changes have been made, and changes only what
          needs to be changed.
          <br />
          You will learn the various aspects of how React does this in the rest
          of this tutorial.
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography
          variant="h4"
          sx={{ mx: 5, color: "#37fb68", lineHeight: "220%" }}
        >
          REACT JS History
        </Typography>
        <Typography variant="h5" sx={{ mx: 5, mb: 2, lineHeight: "180%" }}>
          Current version of React.JS is V18.0.0 (April 2022).
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
          ESLint.
        </Typography>
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
        <Typography variant="h5" sx={{ color: completion?"#37fb68":"#FFF4A3" }}>
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

export default React_Intro;
