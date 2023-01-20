import { Container } from "@mui/material";
import React from "react";
import HomeSvg from "../../assets/svg/taken.svg";
import Grid from "@mui/material/Grid";
import Box from "@material-ui/core/Box";

function About() {
  return (
    <Container maxWidth="xl mt-8 ">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="600px"
        minWidth="100vw"
        className="lg:mt-16 "
      >
        <h1 className="sub-heading text-secondary text-bold text-3xl text-justify   ">
          ABOUT
        </h1>

        <Grid container className="">
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img src={HomeSvg} style={{ width: "500px" }} />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <p className="text-neutral-content  text-2xl text-bold leading-loose text-justify text-neutral-content md:text-2xl lg:mt-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ornare ligula id justo auctor, vitae interdum mauris
              porttitor. Nulla non dui rutrum, maximus lectus ut, mattis felis.
              Maecenas dapibus purus eget dapibus rutrum. Sed vel enim sed augue
              ornare commodo. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Mauris libero nisi,
              malesuada nec interdum vel,
            </p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
