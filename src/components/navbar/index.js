import React from "react";
import Logo from "./Logo";
import navbarCorners from "../../assets/navbar-corner.png";
import Menue from "./Menu";

const Navbar = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.upperWrapper}>
        <div style={styles.corners}>
          <div style={styles.leftCorner}></div>
          <div style={styles.rightCorner}></div>
        </div>
        <Logo />
        <div style={styles.line}>
          <div style={styles.line1}></div>
          <div style={styles.line2}></div>
        </div>
        <Menue />
      </div>
    </div>
  );
};

export default Navbar;

const styles = {
  wrapper: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
  },
  upperWrapper: {
    width: "100vw",
  },
  corners: {
    // width: "100vw",
    display: "flex",
  },
  leftCorner: {
    position: "absolute",
    backgroundImage: `url(${navbarCorners})`,
    backgroundRepeat: "no-repeat",
    width: 200,
    height: 100,
  },
  rightCorner: {
    position: "absolute",
    backgroundImage: `url(${navbarCorners})`,
    backgroundRepeat: "no-repeat",
    right: 0,
    width: 200,
    height: 100,
  },
  line: {
    display: "flex",
    paddingTop: 20,
  },
  line1: {
    background: `linear-gradient(269.89deg, #08FEFF 23.51%, rgba(101, 43, 43, 0) 40.18%, rgba(112, 82, 48, 0) 78.73%)`,
    width: "50vw",
    height: 2,
  },
  line2: {
    background: `linear-gradient(-269.89deg, #08FEFF 23.51%, rgba(101, 43, 43, 0) 40.18%, rgba(112, 82, 48, 0) 78.73%)`,
    width: "50vw",
    height: 2,
    color: "white",
  },
};
