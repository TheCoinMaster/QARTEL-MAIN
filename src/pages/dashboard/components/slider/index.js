import React from "react";
import leftArrows from "../../../../assets/left-arrows.png";
import rightArrows from "../../../../assets/right-arrows.png";
import { useMediaQuery } from "react-responsive";

const Slider = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <div style={styles.slider}>
      {
        !isMobile && (
          <div style={styles.arrowWrap}>
            <img style={styles.arrows} src={leftArrows} alt="" />
          </div>
        )
      }

      <div style={styles.brandWrap}>
        <span id="brand" style={styles.brand}>
          CASINO & NFTs
        </span>
      </div>
      {
        !isMobile && (
          <div style={styles.arrowWrap}>
            <img style={styles.arrows} src={rightArrows} alt="" />
          </div>
        )
      }

    </div>
  );
};

export default Slider;

const styles = {
  slider: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 2,
    paddingTop: 130,
  },
  txt: {
    background: `linear-gradient(180deg, #6E41F7 0%, #F642D7 100%)`,
    backgroundClip: "text",
  },
  arrowWrap: {
    flex: 1
  },
  brandWrap: {
    flex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // gap: 20,
  },
  brand: {
    fontSize: "4rem",
    fontFamily: "Audiowide",
    // fontOpticalsizing: "auto",
    // fontStyle: "normal",
  },
  arrows: {
    width: "9rem",
  },
};
