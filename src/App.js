import React from "react";
import Header from "./Component/Head/Header";
import Home from "./Component/Hero/Home";
import "./App.css";
import Feature from "./Component/Features/Feature";
import Portfolio from "./Component/Portfolio/Portfolio";
import Resume from "./Component/Resume/Resume";
import Testimonial from "./Component/Testimonial/Testimonial";
import Blog from "./Component/Blog.js/Blog";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Feature />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
