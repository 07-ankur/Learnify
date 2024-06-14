import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const TutorialCode = (props) => {
  return (
    <Box
      sx={{
        ml: 5,
        mr: 10,
        mb: 2,
        p:0.5,
        bgcolor: "#192734",
        borderRadius: "1em",
        overflowX: "auto",
      }}
    >
      <Typography variant="h5" sx={{ mx: 2, my: 1, lineHeight: "150%" }}>
        <pre>{props.code}</pre>
      </Typography>
    </Box>
  );
};

export default TutorialCode;
