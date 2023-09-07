import { Box } from '@mui/system';
import React from 'react';
import {ThemeProvider} from '@mui/system';
import { analyticTheme } from '../../utils/theme';
import { CssBaseline } from '@mui/material';
import {Typography} from '@mui/material';
import Lottie from "lottie-react";
import Analytics_anim from '../../assets/lottie-animations/Analytics_anim2.json';
import Auth_btn from '../../components/Buttons/Auth_btn';
import CallMadeIcon from "@mui/icons-material/CallMade";

const Section1 = () => {
  return (
    <ThemeProvider theme={analyticTheme}>
      <CssBaseline/>
      <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',width:'100%',height:'25em'}}>
        <Box sx={{
          width: '90%',
          borderRadius: '25px',
          height: '15em',
          mt: 30,
          p: 5,
          backgroundColor: '#192734',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
        }}>
          <Box display='flex' alignItems='row'>
            <Typography variant='h3' sx={{letterSpacing:'0.05em'}}>
              Hi,
            </Typography>
            <Typography variant='h3' sx={{letterSpacing:'0.05em',color:'#33ffff',ml:1}}>
              Ankur!! 
            </Typography>
          </Box>
          <Box sx={{maxWidth:'75%'}}>
            <Typography variant='h4' sx={{mt:2}}>
              Welcome to the new "Analytics" here at Learnify.
            </Typography>
            <Typography variant='h4' sx={{mb:2}}>
              This will be your hub to analyse all your learning progress.
            </Typography>
            <Typography variant='h4' sx={{mt:4,color:'#33ffff'}}>
              "Prepare Smarter, Not Harder : Start Analyzing Today."
            </Typography>
          </Box>
          <Box sx={{display:'flex', flexDirection:'row'}}>
            <Auth_btn label={"Let's Analyse"} />
          <Box sx={{mx:3,mt:4, display:'flex', flexDirection:'row'}}>
          <Typography variant='h5' sx={{color:'white',letterSpacing:'0.05em', cursor:'pointer', textDecoration:'underline', '&:hover' : {
          color: "skyblue"},}}>
            Browse our courses 
          </Typography>
          <CallMadeIcon sx={{ fontSize: 14, color:'#33ffff' }} />
          </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        position:'absolute',
        top:-100,
        right:90,
        zIndex:100,
        borderRadius: '25px',
        height: '22em',
        mt: 30,
        p: 4,
        backgroundColor: '#192734',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
        width: '30%',
        }}>
        
      </Box>
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', mt:20}}>
      <Lottie
        style={{ width: "50%" }}
        animationData={Analytics_anim}
        loop
        autoplay
        />
      </Box>
    </ThemeProvider>
  )
}

export default Section1;