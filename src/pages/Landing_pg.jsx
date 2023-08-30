import React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../container/Section1'
import Section2 from '../container/Section2'
import Section3 from '../container/Section3'
import Section4 from '../container/Section4'
import Section5 from '../container/Section5'
import Section6 from '../container/Section6'
import Section7 from '../container/Section7'
import Section8 from '../container/Section8'
import Section9 from '../container/Section9'
import Footer from '../components/Footer'


const Landing_pg = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Navbar/>
        {/* <Sections/> */}
        <Section1/>
        <Section2/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
        {/* <Footer/> */}
        <Footer/>
    </div>
  )
}

export default Landing_pg