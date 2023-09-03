import React from 'react'
import MainBG from "../../assets/images/Blog_bg.jpg"
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const Section1 = () => {
  return (
    <>
    <Box sx={{position:'absolute',zIndex:-10, top:'-25%'}}>
      <img src={MainBG} style={{width:'100%', opacity:0.8}}></img>
    </Box>
    <Box sx={{position:'absolute',top:'73%',ml:30}}>
        <Box sx={{display:'flex', flexDirection:'column',alignItems:'center'}}>
            <Typography variant='h1' sx={{letterSpacing:'0.05em',mb:3}}>Welcome To Learnify Blog!!</Typography>
            <Typography variant='h3' sx={{mb:1,color:'#f0f8ffbc'}}>"Explore Insights, Tips, and Updates on Learning"</Typography>
        </Box>
    </Box>
    </>
  )
}

export default Section1