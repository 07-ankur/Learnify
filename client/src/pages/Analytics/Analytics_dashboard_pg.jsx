import React from 'react';
import { ThemeProvider } from '@mui/material';
import { analyticTheme } from '../../utils/theme';
import { CssBaseline } from '@mui/material';
import Navbar from '../../components/Navbar';
import Section1 from '../../container/Analytics-dashboard.jsx/Section1';
// import Section2 from '../../container/Analytics-dashboard.jsx/Section2';
import Section3 from '../../container/Analytics-dashboard.jsx/Section3';
import Footer from '../../components/Footer';

const Analytics_dashboard_pg = () => {
  return (
    <ThemeProvider theme={analyticTheme}>
      <CssBaseline />
      <Navbar />
      <Section1 />
      <Section3 />
      {/* <Section2 /> */}
      <Footer />
    </ThemeProvider>
  );
};

export default Analytics_dashboard_pg;
