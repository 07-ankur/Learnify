import React from 'react';
import Navbar from '../../components/Navbar';
import Section1 from '../../container/Analytics/Section1';
import Section2 from '../../container/Analytics/Section2';
import { ThemeProvider } from '@mui/material';
import { analyticTheme } from '../../utils/theme';
import { CssBaseline } from '@mui/material';
import Footer from "../../components/Footer";
import Section3 from '../../container/Analytics/Section3'

const Analytics_pg = () => {
  return (
    <ThemeProvider theme={analyticTheme}>
    <CssBaseline/>
    <Navbar/>
    <Section1/>
    {/* <Section2/> */}
    <Section3/>
    <Footer/>
    </ThemeProvider>
  )
}

export default Analytics_pg;