import React from "react";
import { Typography } from "@mui/material";

const TutorialTopic = (props) => {
  return (
    <Typography
      variant="h4"
      sx={{ mx: 5, color: "#37fb68", lineHeight: "250%" }}
    >
      {props.topic}
    </Typography>
  );
};

export default TutorialTopic;
