import React from "react";
import sd from "../../assets/logo.png";
import ConnectBtn from "../../utill/Button/Connect";
import { useMediaQuery } from "react-responsive";

const Logo = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <div style={styles.wrapper}>
      {!isMobile && (
        <div style={styles.leftCorner} />
      )}
      <div style={styles.nameWrapper}>
        <img src={sd} alt="" style={styles.logo} />
        <span style={styles.name}>QARTEL</span>
      </div>
      {!isMobile && (
        <div style={styles.rightCorner}>
          <ConnectBtn />
        </div>
      )}
    </div>
  );
};

export default Logo;

const styles = {
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 2,
  },
  logo: {
    width: "4rem",
    height: "4rem",
  },
  name: {
    color: "white",
    fontFamily: "Orbitron",
    fontOpticalsizing: "auto",
    fontWeight: 500,
    fontSize: "4rem",
    fontStyle: "normal",
  },
  leftCorner: {
    flex: 1,
  },
  nameWrapper: {
    flex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  rightCorner: {
    // width: 200,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
