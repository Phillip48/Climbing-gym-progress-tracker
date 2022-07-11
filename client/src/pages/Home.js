import React from "react";
import HomeComp from "../components/home/index.js";
// import HeaderBanner from '../components/banner/index.js';
// import ContactMeComp from "../components/contactForm/Index";
import Footer from '../components/footer/index';

const Homepage = () => {
  return (
    <>
      {/* <HeaderBanner /> */}
      <HomeComp />
      {/* <ContactMeComp /> */}
      <Footer />
    </>
  );
};

export default Homepage;