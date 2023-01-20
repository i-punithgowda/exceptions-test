import { Container } from "@mui/material";
import React from "react";
import MaleAstronaut from "../../assets/svg/male.svg";
import FemaleAstronaut from "../../assets/svg/female.svg";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";



function Contact() {
  return (
    <Container maxWidth="xl mt-16 text-neutral-content">
      <h1 className="sub-heading text-secondary text-bold text-3xl " id="contact">
        CONTACT US
      </h1>

      <h4 className="text-center my-8 text-2xl text-bold ">
        Main Co-ordinators
      </h4>

      <Grid container className="lg:px-20" spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"    >
            <img src={MaleAstronaut} alt="male" className="img-contact" />
            <h3 className="text-center  text-xl text-bold">NITHIN</h3>
            <h4 className="text-center my-1 text-xl text-bold">
            nithin.mca21@rvce.edu.in
            </h4>
            <h4 className="text-center text-xl text-bold">+91-8310193605</h4>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={FemaleAstronaut} alt="male" className="img-contact" />
            <h3 className="text-center  text-xl text-bold">
              SANJANA AVADHANI
            </h3>
            <h4 className="text-center my-1 text-xl text-bold">
            sanjanaga.mca21@rvce.edu.in
            </h4>
            <h4 className="text-center text-xl text-bold">+91-9901091362</h4>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
