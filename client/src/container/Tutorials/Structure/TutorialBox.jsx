import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const TutorialBox = (props) => {
  return (
    <Box sx={{ my: 2, mx: 4, p: 1, borderRadius: "1em", bgcolor: "#FFF4A3" }}>
      <Typography
        variant="h5"
        sx={{ mx: 4, mt: 2, mb: 2, lineHeight: "150%", color: "black" }}
      >
        {props.content}
      </Typography>
    </Box>
  );
};

export default TutorialBox;
