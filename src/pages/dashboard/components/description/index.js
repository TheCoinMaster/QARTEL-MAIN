import React from "react";
import rightBall from "../../../../assets/right-ball.png";

const Description = () => {
  return (
    <>
      <div style={styles.description}>
        <p style={styles.descriptionTxt}>{`Qartel is the first casino and NFTs collection on Qom. Our fast, secure, marketplace houses the syndicate. Collect and trade—Intimidate rivals and inspire loyalty, solidifying your place in the hierarchy of power.`}</p>
      </div>
      <div style={styles.description2}>
        <p style={styles.descriptionTxt}>{`Qartel has an exclusive collection of 2222 NFTs, each representing a unique character. Among these digital assets, hawks symbolize keen strategists, always on the lookout for opportunities.`}</p>
      </div>
    </>
  );
};

export default Description;

const styles = {
  description: {
    paddingTop: 50,
    display: "flex",
    justifyContent: "center",
    // positiion: "relative",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center"
  },
  descriptionTxt: {
    width: "100%",
    color: "white",
    maxWidth: "65%",
    textAlign: "center",
    fontFamily: "Rajdhani",
    fontSize: "1.8rem",
  },
  description2: {
    paddingTop: 10,
    display: "flex",
    justifyContent: "center",
    // positiion: "relative",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
};
