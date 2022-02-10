import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Components
import TopBar from "../components/layout/TopBar";
import Header from "../components/landing page/Header";
import About from "../components/landing page/About";
import FactoryBuilding from "../components/landing page/FactoryBuilding";
import Machines from "../components/landing page/Machines";
import Laborers from "../components/landing page/Laborers";
import Functionality from "../components/landing page/Functionality";
import ShoesView from "../components/landing page/ShoesView";
import RoadMap from "../components/landing page/RoadMap";
import ContactUs from "../components/landing page/ContactUs";

import imgVideo from "../assets/img/GifVideo.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${imgVideo})`,
    backgroundColor: theme.palette.background.default,
    height: "700px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <TopBar />
        <Header />
      </Box>
      <About />
      <FactoryBuilding />
      <Machines />
      <Laborers />
      <Functionality />
      <ShoesView />
      <RoadMap />
      <ContactUs />
    </>
  );
}

export default LandingPage;
