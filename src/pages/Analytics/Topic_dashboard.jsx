import React from "react";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { analyticTheme } from "../../utils/theme";
import Section1 from "../../container/Analytics-dashboard.jsx/Topicdashboard/Section1";
import Section2 from "../../container/Analytics-dashboard.jsx/Topicdashboard/Section2";
import Section3 from "../../container/Analytics-dashboard.jsx/Topicdashboard/Section3";

const Topic_dashboard = () => {
  
  return (
    <ThemeProvider theme={analyticTheme}>
      <CssBaseline />
      <Section1/>
      <Section2/>
      <Section3/>
    </ThemeProvider>
  );
};

export default Topic_dashboard;
