import { Box } from '@mui/system';
import React from 'react';
import {ThemeProvider} from '@mui/system';
import { analyticTheme } from '../../utils/theme';
import { CssBaseline } from '@mui/material';
import {Typography} from '@mui/material';
import Auth_btn from '../../components/Buttons/Auth_btn';
import CallMadeIcon from "@mui/icons-material/CallMade";
import Scorechart from './Scorechart';

const Section1 = () => {
  return (
    <ThemeProvider theme={analyticTheme}>
      <CssBaseline/>
      <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',width:'100%',height:'25em'}}>
        <Box sx={{
          width: '96%',
          borderRadius: '25px',
          height: '15em',
          mt:25,
          p:5,
          backgroundColor: '#192734',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
        }}>
          <Box display='flex' alignItems='row'>
            <Typography variant='h3' sx={{letterSpacing:'0.05em', color:'skyblue'}}>
              Hi,
            </Typography>
            <Typography variant='h3' sx={{letterSpacing:'0.05em',color:'skyblue',ml:1,textShadow: '0px 1px cyan'}}>
              Ankur !! 
            </Typography>
          </Box>
          <Box sx={{maxWidth:'65%'}}>
            <Box sx={{display:'flex', flexDirection:'row'}}>
            <Typography variant='h4' sx={{mt:2,mr:1}}>
              Welcome to the new
            </Typography>
            <Typography variant='h4' sx={{mt:2,mr:1,color:'cyan'}}>
              "Analytics"
            </Typography>
            <Typography variant='h4' sx={{mt:2}}>
              here at Learnify.
            </Typography>
            </Box>
            <Typography variant='h4' sx={{mb:2}}>
              This will be your hub to analyse all your learning progress.
            </Typography>
            <Typography variant='h4' sx={{mt:4,mb:0.5,color:'skyblue'}}>
              "Prepare Smarter, Not Harder :  Dive into Analytical Learning"
            </Typography>
          </Box>
          <Box sx={{display:'flex', flexDirection:'row'}}>
            <Auth_btn label={"Let's Analyse"} />
          <Box sx={{mx:3,mt:4, display:'flex', flexDirection:'row'}}>
          <Typography variant='h5' sx={{color:'white',letterSpacing:'0.05em', cursor:'pointer', textDecoration:'underline', '&:hover' : {
          color: "cyan"},}}>
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
        right:80,
        zIndex:100,
        borderRadius: '25px',
        height: '23em',
        mt: 28,
        p: 4,
        backgroundColor: '#192734',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
        width: '30%',
        }}>
        <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        <Typography align='center' variant='h4' sx={{mb:2}}>
          Good Job!!
        </Typography>
        <Typography align='center' variant='h3' sx={{mb:0.5, color:'skyblue'}}>
        🔥 Your Score 🔥
        </Typography>
        <Typography align='center' variant='h2' sx={{color:'cyan',my:0.5,}}>
          590
        </Typography>
        <Box sx={{mt:-4}}>
          <Scorechart/>
        </Box>
        <Box sx={{mt:-6,p:2,backgroundColor: '#192734',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRight:'4px solid cyan',borderLeft:'4px solid cyan', borderRadius:'25px',width:'75%', height:'20%'}}>
          <Box sx={{display:'flex', flexDirection:'row'}}>
            <Typography variant='h5' sx={{mr:1.5, color:'cyan'}}>
              1
            </Typography>
            <Typography variant='h5' sx={{color:'skyblue'}}>
              stars🌟 collected 
            </Typography>
          </Box>
        </Box>  
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Section1;