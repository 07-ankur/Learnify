import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom"
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import {theme} from './utils/theme/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline/>
        <App /> 
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
