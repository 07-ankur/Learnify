import React from 'react'
import './index.css'
import { Route,Routes } from 'react-router-dom'
import Landing_pg from './pages/Landing_pg'
import Home_pg from './pages/Home_pg'
import Tutorials_pg from './pages/Tutorials_pg'
import Signup_pg from './pages/Signup_pg'
import Login_pg from './pages/Login_pg'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing_pg/>}/>
        <Route path='/home' element={<Home_pg/> }/>
        <Route path='/tutorials' element={<Tutorials_pg/> }/>
        <Route path='/signup' element={<Signup_pg/> }/>
        <Route path='/login' element={<Login_pg/> }/>
        <Route path='*' element={<Landing_pg/> }/>
      </Routes>
    </div>
  )
}

export default App
