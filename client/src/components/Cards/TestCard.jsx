import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import OutlinedButton from "../Buttons/OutlinedButton";
import Title from "../Title";

const TestCard = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        height: "100%",
        position: "relative",
        p: 4,
        borderRadius: "30px",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "30px",
          border: "1px solid white",
          background: "linear-gradient(#5f5f61,transparent) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exlude",
        },
      }}
    >
      <Stack sx={{ height: "100%" }} spacing={2.3}>
        <Title sx={{color:'white'}} variant={{ xs: "h4", sm: "h3" }}>{title}</Title>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography> 
        <OutlinedButton arrow fit>
          Start Test
        </OutlinedButton>
      </Stack>
    </Box>
  );
};

export default TestCard;