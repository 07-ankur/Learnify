import React from 'react'
import MainBG from "../../assets/images/Blog_bg.jpg"
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import CallMadeIcon from "@mui/icons-material/CallMade";
import {Divider} from '@mui/material';

const Section1 = () => {
  return (
    <Box>
    <Box sx={{position:'absolute',zIndex:-10, top:'-55%'}}>
      <img src={MainBG} style={{width:'100%', opacity:0.8}}></img>
    </Box>
    <Box sx={{mt:35}}>
        <Box sx={{display:'flex', flexDirection:'column',alignItems:'center'}}>
            <Typography variant='h1' sx={{letterSpacing:'0.05em',color:'#B6976A'}}>Welcome To Learnify Blog!!</Typography>
            <Typography variant='h3' sx={{mb:2.5,color:'#f0f8ffbc'}}>"Explore Insights, Tips, and Updates seamlessly"</Typography>
            <Box sx={{display:'flex',flexDirection:'row'}}>
            <Typography variant='h5' sx={{mb:1,color:'#B6976A',letterSpacing:'0.05em'}}>Learn & Grow:- </Typography>
            <Typography variant='h5' sx={{mb:1,color:'#B6976A',letterSpacing:'0.05em',cursor:'pointer', textDecoration:'underline', '&:hover' : {
            color: "#fff"},}}>Browse our courses </Typography>
            <CallMadeIcon sx={{ fontSize: 12 }} />
            </Box>
            <Divider sx={{width:'75%',mt:2}} variant='middle'/>
        </Box>
    </Box>
    </Box>
  )
}

export default Section1;