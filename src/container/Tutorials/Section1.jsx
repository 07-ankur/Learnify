import React from "react";
import { Box } from "@mui/system";
import Lottie from "lottie-react";
import Tutorials_anim from "../../assets/animations/Tutorials_anim.json";
import { ThemeProvider } from "@mui/system";
import { CssBaseline, Typography } from "@mui/material";
import { tutorialTheme } from "../../utils/theme";
import { Divider } from "@mui/material";

const Section1 = () => {
  return (
    <ThemeProvider theme={tutorialTheme}>
      <CssBaseline />
      <Box
        sx={{
          mt: 12,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box sx={{ width: "80%" }}>
          <Lottie animationData={Tutorials_anim} />
        </Box>
        <Box sx={{ mx: 5, p:1 }}>
          <Typography variant="h1" sx={{ color: "#FFF4A3", my: 2 }}>
            Simply Easy Learning At Your Fingertips
          </Typography>
          <Box sx={{ height: "70px" }}></Box>
          <Typography variant="h5" sx={{ my: 2 }}>
            Skyrocket your career to success with top-rated Tutorials and make your learning journey smooth and hustle-free
          </Typography>
        </Box>
      </Box>
      <Divider />
    </ThemeProvider>
  );
};

export default Section1;
