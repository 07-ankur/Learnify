import React from "react";
import Navbar from "../../components/Navbar";
import { Box, ThemeProvider } from "@mui/system";
import Section1 from "../../container/Blog/Section1";
import Section2 from "../../container/Blog/Section2";
import Section3 from "../../container/Blog/Section3";
import Footer from "../../components/Footer";
import { blogTheme } from "../../utils/theme";
import { CssBaseline } from "@mui/material";

const Blog_pg = () => {
  return (
    <ThemeProvider theme={blogTheme}>
      <CssBaseline/>
    <Box>
      <Navbar color={'white'} sp={-1}/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </Box>
    </ThemeProvider>
  );
};

export default Blog_pg;
