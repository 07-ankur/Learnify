import React from "react";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";
import { mapperTheme } from "../../utils/theme";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import Html_roadmap from "../../assets/roadmaps/frontend.pdf";

const Roadmap_pg = () => {
  const location = useLocation();

  const path = location.pathname.split("/")[2];

  return (
    <ThemeProvider theme={mapperTheme}>
      <CssBaseline />
      <Typography sx={{ textAlign: "center", m: 2 }} variant="h2">
        {path.replace(/-/g, " ")} Roadmap
      </Typography>
      <iframe
        title="Roadmap PDF"
        width="100%"
        height="600"
        src={Html_roadmap}
      ></iframe>
    </ThemeProvider>
  );
};

export default Roadmap_pg;
