import { CssBaseline, Typography, Divider } from "@mui/material";
import { Box, ThemeProvider } from "@mui/system";
import React from "react";
import { tutorialTheme } from "../../utils/theme";
import OutlinedButton from "../../components/Buttons/OutlinedButton";

const TutorialContent = () => {
  return (
    <ThemeProvider theme={tutorialTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: "20%",
            minHeight: "100vh",
            backgroundColor: "#66c1e5",
            p:1.5,
          }}
        >
          <OutlinedButton
            arrowRev
            sx={{mb:2, mx: 2, color:'black', borderColor:'black' }}
            fit
          >
            Back to Home
          </OutlinedButton>
          <Divider sx={{border:'1px solid black', mb:1}}/>
          <Typography variant="h4" sx={{ color: "Black", my:2 }}>Tutorial Name</Typography>
        </Box>
        <Box sx={{ width: "80%" }}></Box>
      </Box>
    </ThemeProvider>
  );
};

export default TutorialContent;
