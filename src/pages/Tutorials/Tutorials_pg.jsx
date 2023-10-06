import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import {Box} from '@mui/system';
import { ThemeProvider } from '@mui/system';
import { CssBaseline, Typography } from '@mui/material';
import { tutorialTheme } from '../../utils/theme';

function Tutorials_pg() {
  return (
    <ThemeProvider theme={tutorialTheme}>
      <CssBaseline/>
    <Navbar/>
    <Box sx={{height:'100vh', mt:20}}>
      <Typography sx={{color:'#FFF4A3'}}>
        Tutorials
      </Typography>
    </Box>
    <Footer/>
    </ThemeProvider>
  )
}

export default Tutorials_pg