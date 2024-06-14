import React from "react";
import buildings from "../../../../assets/buildings.png";
import Footer from "../../../../components/footer";

const Buildings = () => {
  return (
    <div style={styles.video}>
      {/* <img src={buildings} alt="" style={styles.building} /> */}
      <Footer />
    </div>
  );
};

export default Buildings;

const styles = {
  video: {
    width: "100%",
    height: 800,
    backgroundImage: `url(${buildings})`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
};
