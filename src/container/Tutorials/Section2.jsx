import React from 'react'
import { Box, ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { tutorialTheme } from '../../utils/theme';
import {Typography} from '@mui/material';
import {Divider} from "@mui/material";

const Section2 = () => {
  return (
    <ThemeProvider theme={tutorialTheme}>
    <CssBaseline/>
      <Box sx={{display:'flex', alignItems:'center', flexDirection:'column', mt:5}}>
        <Typography variant='h1' sx={{color:'#37fb68'}}>
          Start Learning!!    
        </Typography>
        <Typography variant='h4' sx={{mb:1}}>
        Explore our categorical content and empower your knowledge    
        </Typography>
        <Divider sx={{width:'85%', border:'1px solid white', mb:5}}/>
      </Box>
    </ThemeProvider>
  )
}

export default Section2