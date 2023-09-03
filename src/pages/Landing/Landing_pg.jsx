import React from "react";
import Navbar from "../../components/Navbar";
import Section1 from "../../container/Landing/Section1";
import Section3 from "../../container/Landing/Section3";
import Section4 from "../../container/Landing/Section4";
import Section2 from "../../container/Landing/Section2";
import Section5 from "../../container/Landing/Section5";
import Section6 from "../../container/Landing/Section6";
import Section7 from "../../container/Landing/Section7";
import Section8 from "../../container/Landing/Section8";
import Section9 from "../../container/Landing/Section9";
import Footer from "../../components/Footer";

const Landing_pg = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Navbar />
      {/* <Sections/> */}
      <Section1 />
      <Section2 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      {/* <Footer/> */}
      <Footer />
    </div>
  );
};

export default Landing_pg;
