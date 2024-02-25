import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import { ThemeProvider } from '@mui/system';
import { CssBaseline} from '@mui/material';
import { tutorialTheme } from '../../utils/theme';
import Section1 from '../../container/Tutorials/Section1';
import Section2 from '../../container/Tutorials/Section2';
import Section3 from '../../container/Tutorials/Section3';

function Tutorials_pg() {
  return (
    <ThemeProvider theme={tutorialTheme}>
      <CssBaseline/>
    <Navbar/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Footer/>
    </ThemeProvider>
  )
}

export default Tutorials_pg