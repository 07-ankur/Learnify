import React from "react";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";
import { mapperTheme } from "../../utils/theme";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import html_roadmap from "../../assets/roadmaps/frontend.pdf";
import css_roadmap from "../../assets/roadmaps/frontend.pdf";
import react_roadmap from "../../assets/roadmaps/react.pdf";
import mongodb_roadmap from "../../assets/roadmaps/mongodb.pdf";
import nodejs_roadmap from "../../assets/roadmaps/Nodejs.pdf";
import expressjs_roadmap from "../../assets/roadmaps/backend.pdf";
import cpp_roadmap from "../../assets/roadmaps/cpp.pdf";
import javascript_roadmap from "../../assets/roadmaps/javascript.pdf";
import python_roadmap from "../../assets/roadmaps/python.pdf";
import sql_roadmap from "../../assets/roadmaps/sql.pdf";

const Roadmap_pg = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const roadmapPdfs = {
    HTML: html_roadmap,
    CSS: css_roadmap,
    React_JS: react_roadmap,
    Node_JS: nodejs_roadmap,
    Mongo_DB: mongodb_roadmap,
    Express_JS: expressjs_roadmap,
    SQL: sql_roadmap, 
    Python: python_roadmap,
    'C++': cpp_roadmap,
    JavaScript: javascript_roadmap,
  };

  const roadmap = roadmapPdfs[path];

  return (
    <ThemeProvider theme={mapperTheme}>
      <CssBaseline />
      <iframe
        title="Roadmap PDF"
        width="100%"
        height="650em"
        src={roadmap}
      ></iframe>
    </ThemeProvider>
  );
};

export default Roadmap_pg;
