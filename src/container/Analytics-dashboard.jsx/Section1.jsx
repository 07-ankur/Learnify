import React from 'react';
import { ThemeProvider } from 'styled-components';
import { analyticTheme } from '../../utils/theme';

const Section1 = () => {
  return (
    <ThemeProvider theme={analyticTheme}>
    <div>Section1</div>
    </ThemeProvider>
  )
}

export default Section1;