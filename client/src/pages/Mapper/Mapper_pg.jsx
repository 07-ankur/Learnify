import React from 'react'
import Home from '../../container/Mapper/Home';
import Footer from '../../components/Footer';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import { mapperTheme } from '../../utils/theme';
import Navbar from '../../components/Navbar';

const Mapper_pg = () => {
  return (
    <ThemeProvider theme={mapperTheme}>
      <CssBaseline/>
      <Navbar/>
      <Home/>
      <Footer/>
    </ThemeProvider>
  )
}

export default Mapper_pg;