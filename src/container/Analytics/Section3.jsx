import React from 'react';
import { Box } from '@mui/system';
import Lottie from "lottie-react";
import Analytics_anim from '../../assets/lottie-animations/Analytics_anim2.json';


const Section3 = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', mt:20, borderBottom:'2px solid skyblue'}}>
      <Lottie
        style={{ width: "40%" }}
        animationData={Analytics_anim}
        loop
        autoplay
        />
      </Box>
  )
}

export default Section3;