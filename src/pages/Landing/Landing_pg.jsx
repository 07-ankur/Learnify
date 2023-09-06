import React from "react";
import Navbar from "../../components/Navbar";
import Section1 from "../../container/Landing/Section1";
import Section3 from "../../container/Landing/Section3";
import Section4 from "../../container/Landing/Section4";
import Section2 from "../../container/Landing/Section2";
import Section5 from "../../container/Landing/Section5";
import Section6 from "../../container/Landing/Section6";
import Section7 from "../../container/Landing/Section7";
import Footer from "../../components/Footer";

const Landing_pg = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Navbar />
      {/* <Sections/> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      {/* <Footer/> */}
      <Footer />
    </div>
  );
};

export default Landing_pg;
