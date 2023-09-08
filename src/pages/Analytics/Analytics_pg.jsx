import React from 'react'
import Navbar from '../../components/Navbar'
import Section1 from '../../container/Analytics/Section1'
import Section2 from '../../container/Analytics/Section2'
import { ThemeProvider } from 'styled-components'
import { analyticTheme } from '../../utils/theme'
import Footer from "../../components/Footer";
import Section4 from '../../container/Analytics/Section4'
import Section3 from '../../container/Analytics/Section3'

const Analytics_pg = () => {
  return (
    <>
    <Navbar/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Footer/>
    </>
  )
}

export default Analytics_pg;