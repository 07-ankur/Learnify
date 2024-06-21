import React from "react";
import { Box } from "@mui/system";
import Lottie from "lottie-react";
import Analytics_anim from "../../assets/animations/Analytics_anim2.json";
import { Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";

const Section3 = () => {
  const navigate = useNavigate();

  const handleTutorialsClick = () => {
    navigate("/tutorials");
  };

  const handleQuizClick = () => {
    navigate("/quizMastery");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 10,
        borderBottom: "2px solid skyblue",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mx: 6,
          color: "skyblue",
          cursor: "pointer",
          "&:hover": { color: "white", textDecoration: "underline" },
        }}
        onClick={handleTutorialsClick}
      >
        Browse Tutorials
        <OpenInNewIcon />
      </Typography>
      <Lottie
        style={{ width: "40%" }}
        animationData={Analytics_anim}
        loop
        autoplay
      />
      <Typography
        variant="h4"
        sx={{
          mx: 6,
          color: "skyblue",
          cursor: "pointer",
          "&:hover": { color: "white", textDecoration: "underline" },
        }}
        onClick={handleQuizClick}
      >
        Take a Quiz
        <OpenInNewIcon />
      </Typography>
    </Box>
  );
};

export default Section3;
