import { CssBaseline, Typography, Divider } from "@mui/material";
import { Box, ThemeProvider } from "@mui/system";
import React from "react";
import { tutorialTheme } from "../../utils/theme";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import ContainedButton from "../../components/Buttons/Contained_btn";
import Listing from "./React_tutorials/React_TopicList";
import Home from "./React_tutorials/React_Home";
import Intro from "./React_tutorials/React_Intro";
import GetStarted from "./React_tutorials/React_GetStarted";

const TutorialPage = () => {
  return (
    <ThemeProvider theme={tutorialTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: "20%",
            height: "100vh",
            backgroundColor: "#192734",
            py: 1.5,
            overflowY:'auto'
          }}
        > 
          <OutlinedButton arrowRev sx={{ mt: 1, mb: 2, mx: 2 }} fit>
            Back to Home
          </OutlinedButton>
          <Divider sx={{ border: "1px solid white", mb: 1 }} />
          <Typography variant="h4" sx={{ m: 2, color: "#FFF4A3" }}>
            React JS Tutorial
          </Typography>
          <Divider sx={{ border: "1px solid white" }} />
          <Listing/>
        </Box>
        <Box sx={{ width: "80%", maxHeight:'100vh', overflowY: 'auto', px:2}}>
          <Typography variant="h2" sx={{ mx: 5, my: 3, color: "#FFF4A3" }}>
            React Intro
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "85%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ContainedButton arrowRev sx={{ mb: 2, mx: 2, color: "black" }} fit>
              Prev
            </ContainedButton>
            <ContainedButton arrow sx={{ mb: 2, mx: 2, color: "black" }} fit>
              Next
            </ContainedButton>
          </Box>
          <Intro/>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TutorialPage;
