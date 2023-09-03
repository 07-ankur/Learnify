import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import OutlinedButton from "../Buttons/OutlinedButton";
import Title from "../Title";

const BlogCard = ({ title, subtitle, image }) => {
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
          border: "1px solid transparent",
          background: "linear-gradient(120deg,#5f5f61,transparent) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exlude",
        },
      }}
    >
      <Stack sx={{ height: "100%" }} spacing={1}>
        <Title variant={{ xs: "h4", sm: "h3" }}>{title}</Title>

        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>

        <Box>

        <img
          src={image}
          style={{
            height: "180px",
            width: "70%",
            objectFit: "contain",
            flex: 1,
          }}
        />

        <OutlinedButton arrow fit>
          Learn more
        </OutlinedButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default BlogCard;