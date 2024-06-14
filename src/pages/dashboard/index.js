import React from "react";
import leftHero from "../../assets/left-hero.png";
import rightHero from "../../assets/right-hero.png";
import Navbar from "../../components/navbar";
import Slider from "./components/slider";
import Description from "./components/description";
import Services from "./components/services";
import Buildings from "./components/video";

const Dashboard = () => {
  return (
    <div style={styles.dashboard}>
      <div className="hero-left" style={styles.heroLeft}></div>
      <div className="hero-right" style={styles.heroRight}></div>
      <div style={styles.content}>
        <Navbar />
        <Slider />
        <Description />
        <Services />
        <Buildings />
      </div>
    </div>
  );
};

export default Dashboard;

const styles = {
  dashboard: {
    height: 1000,
    width: "100vw",
    backgrond: "green",
    position: "relative",
  },
  heroLeft: {
    backgroundImage: `url(${leftHero})`,
    height: "100%",
    position: "absolute",
    left: 0,
    width: "100vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  heroRight: {
    backgroundImage: `url(${rightHero})`,
    height: "100%",
    position: "absolute",
    right: 0,
    width: "100vw",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  content: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
  },
};
