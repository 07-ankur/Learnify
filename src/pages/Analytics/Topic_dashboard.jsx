import React from "react";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { analyticTheme } from "../../utils/theme";
import Section1 from "../../container/Topicdashboard/Section1"
import Section2 from "../../container/Topicdashboard/Section2";
import Section3 from "../../container/Topicdashboard/Section3";
import Footer from "../../components/Footer";

const Topic_dashboard = () => {
  return (
    <ThemeProvider theme={analyticTheme}>
      <CssBaseline />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </ThemeProvider>
  );
};

export default Topic_dashboard;
