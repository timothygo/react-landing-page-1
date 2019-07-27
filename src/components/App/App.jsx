import React, { Suspense } from "react";
import "./App.scss";

import ScrollTopButton from "../ScrollTopButton";
import { Helmet } from "react-helmet";

import Header from "../Header";
import Services from "../Services";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";
const Hero = React.lazy(() => import("../Hero"));

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Space Expo</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
      </Helmet>

      <div className="app-layout">
        <Suspense
          fallback={
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#000"
              }}
            />
          }
        >
          <Header id="header" className="wrapper" />
          <Hero id="hero" className="wrapper" />
          <About id="about" className="wrapper" />
          <Services id="services" className="wrapper" />
          <Contact id="contact" className="wrapper" />
          <Footer id="footer" className="wrapper" />
        </Suspense>
      </div>

      <ScrollTopButton showAt={window.innerHeight / 1.5} />
    </React.Fragment>
  );
};

export default App;
