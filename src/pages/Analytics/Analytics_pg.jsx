import React from 'react'
import Navbar from '../../components/Navbar'
import Section1 from './Section1'
import { ThemeProvider } from 'styled-components'
import { analyticTheme } from '../../utils/theme'

const Analytics_pg = () => {
  return (
    <ThemeProvider theme={analyticTheme}>
    <Navbar/>
    <Section1/>
    </ThemeProvider>
  )
}

export default Analytics_pg;