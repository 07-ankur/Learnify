import React from "react";
import Navbar from "../../components/Navbar";
import { Box } from "@mui/system";
import MainBG from "../../assets/images/Blog_bg.jpg"

const Blog_pg = () => {
  return (
    <Box>
      <Box sx={{position:'absolute',zIndex:-10}}>
      <img src={MainBG} style={{width:'100%', opacity:0.8}}></img>
      </Box>
      <Navbar />
    </Box>
  );
};

export default Blog_pg;
