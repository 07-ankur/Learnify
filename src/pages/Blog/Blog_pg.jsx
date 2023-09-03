import React from "react";
import Navbar from "../../components/Navbar";
import { Box } from "@mui/system";
import Section1 from "../../container/Blog/Section1";
import Section2 from "../../container/Blog/Section2";
import Footer from "../../components/Footer";

const Blog_pg = () => {
  return (
    <Box>
      <Navbar color={'white'} sp={-1}/>
      <Section1/>
      <Section2/>
      <Footer/>
    </Box>
  );
};

export default Blog_pg;
