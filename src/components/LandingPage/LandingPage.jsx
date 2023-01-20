import React, { useState, useEffect } from "react";
import Background from "../custom_styling/Background";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import HomeSvg from "../../assets/svg/home-banner.svg";
import Countdown from "./Countdown";
import About from "./About";
import Events from "./Events";
import Container from "@mui/material/Container";
import Map from "./Map";
import Contact from "./Contact";
import Grid from '@mui/material/Grid';
import Box from "@material-ui/core/Box";
import Footer from "./Footer";


function LandingPage() {
  return (
    <div>
    <Container maxWidth="xl">
      <div className="landing-page text-secondary font-bold loading">
        <header>
          <Navbar />
          <Background />
        </header>


        <Box display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          minWidth="100vw"
          className="mt-16"
        >
          <Grid container className="lg:px-20 md:px-20" Spacing={9}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={8} order={{ xs: 2, sm: 2,xl:1,lg:1,md:2}}>
              <h1 className="text-4xl my-5 text-primary headings sm:text-4xl md:text-6xl lg:text-7xl title text-center">EXCEPTIONS
                <br /> 2023
              </h1>

              {/* Tagline */}
              <p className="text-neutral-content text-md my-5 md:text-2xl  xs:text-md sm:text-xl sm:text-center lg:text-left tagline font-extrabold">
                UNLEASH THE EXCEPTION IN YOU
              </p>

              {/* Register btn */}
              <div className="w-100 flex justify-center align-center lg:justify-start">
                <Link
                  to="/register"
                  className="btn btn-wide align-center btn-outline btn-warning my-3 btn-sm lg:btn-lg"
                >
                  JOIN US NOW
                </Link>
              </div>


              {/* Countdown */}

              <h3 className="text-xl lg:text-2xl text-center lg:text-left my-3  uppercase font-extrabold mt-8 text-neutral-content sm:text-neutral-content">
                Ready to take off in:
              </h3>
              <Countdown />


            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={4} order={{ xs: 1 ,sm:1,xl:2,lg:2,md:1}}>
              <img src={HomeSvg} style={{ width: "100%", maxWidth: "25rem" ,marginLeft:'30px'}} className="img-banner" />
            </Grid>
          </Grid>


          <About />

          <Events />

        </Box>
        <Map />

        <Contact />
      </div>
    </Container>

    <Footer />

    </div>
  );
}

export default LandingPage;