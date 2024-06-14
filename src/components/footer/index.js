import React from "react";
import logo from "../../assets/logo.png";
import vimeo from "../../assets/vimeo.png";
import twitter from "../../assets/twitter.png";
import messenger from "../../assets/messenger.png";
import github from "../../assets/github.png";
import discord from "../../assets/discord.png";
import ConnectBtn from "../../utill/Button/Connect";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });
  return (
    <div style={styles.wrapper(isMobile)}>
      <div style={styles.nameWrapper}>
        <img src={logo} alt="" style={styles.logo} />
        <span style={styles.name}>QARTEL</span>
      </div>
      <div style={styles.socialWrapper}>
        <span style={styles.social}>Social</span>
        {/* Social Media Button */}
        <div style={styles.socialIcons}>
          <img src={twitter} alt="Image" onClick={(e) => window.open('https://x.com/qomqartel', '_blank')} target="_blank" />
          <img src={vimeo} alt="Image" onClick={(e) => window.open('https://t.me/QOMQartel', '_blank')} target="_blank" />
        </div>
      </div>

      <div style={styles.connect}>
        <ConnectBtn />
      </div>
    </div>
  );
};

export default Footer;

const styles = {
  wrapper: (isMobile) => ({
    height: 250,
    borderTopLeftRadius: 100,
    background: "#000",
    borderTopRightRadius: 100,
    boxShadow: `-20px -10px 150px #FF009B`,
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    padding: 20,
  }),
  nameWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    flex: 1,
  },
  name: {
    color: "white",
    fontFamily: "Orbitron",
    fontOpticalsizing: "auto",
    fontWeight: 500,
    fontSize: "2rem",
    fontStyle: "normal",
  },
  logo: {
    width: 50,
    height: 50,

  },
  socialWrapper: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  social: {
    fontFamily: "Sora",
    color: "white",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10%",
  },
  connect: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
};
