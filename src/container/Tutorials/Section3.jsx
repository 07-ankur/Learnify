import React from "react";
import { Box, ThemeProvider } from "@mui/system";
import {Container} from "@mui/system";
import { CssBaseline } from "@mui/material";
import { tutorialTheme } from "../../utils/theme";
import { Typography } from "@mui/material";

const Section3 = () => {
  return (
    <ThemeProvider theme={tutorialTheme}>
      <CssBaseline />
      <Container maxWidth='lg'
        sx={{ display: "flex", alignItems: "center", flexDirection: "column", mx:5 }}
      >
        <Typography variant="h5" sx={{ mb: 10 }}>
          Join our millions of learners to access our free Text Library.
          From programming languages to web development our masterfully crafted Tutorials will help you master any technology or concept from scratch.
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default Section3;
