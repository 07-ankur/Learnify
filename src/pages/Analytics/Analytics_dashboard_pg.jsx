import React from 'react';
import { ThemeProvider } from '@mui/material';
import { analyticTheme } from '../../utils/theme';
import { CssBaseline } from '@mui/material';
import Navbar from '../../components/Navbar';
import Section1 from '../../container/Analytics-dashboard.jsx/Section1';
import Footer from '../../components/Footer';

const Analytics_dashboard_pg = () => {
  return (
    <ThemeProvider theme={analyticTheme}>
      <CssBaseline />
      <Navbar />
      <Section1 />
      <Footer />
    </ThemeProvider>
  );
};

export default Analytics_dashboard_pg;
