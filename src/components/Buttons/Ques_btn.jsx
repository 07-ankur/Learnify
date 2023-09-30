import React from "react";
import { Box } from "@mui/system";

const Ques_btn = ({ sx = {}, children, ...props }) => {
  return (
    <Box
      onClick={props.clickHandler}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "2em",
        width: "2em",
        cursor: "pointer",
        borderRadius: "50%",
        border: `2px solid ${props.border}`,
        color: `${props.color}`,
        bgcolor: `${props.bgcolor}`,
      }}
    >
      {props.title}
    </Box>
  );
};

export default Ques_btn;
