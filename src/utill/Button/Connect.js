import React from "react";

const ConnectBtn = () => {
  return (
    <button type="button" style={styles.connect}>
      {/* Connect Button */}
      <div style={styles.btnInner} onClick={() => { }}>
        <span style={styles.btnTxt}>connect</span>
      </div>
    </button>
  );
};

export default ConnectBtn;

const styles = {
  connect: {
    width: 160,
    height: 38,
    border: "0px",
    borderImageSlice: 1,
    color: "white",
    background: `linear-gradient(112.4deg, #FE53BB 29.63%, #09FBD3 76.7%)`,
    borderRadius: 100,
    zIndex: 1,
    padding: 4,
  },
  btnInner: {
    background: `linear-gradient(112.4deg, rgb(70 24 52) 29.63%, rgb(1 55 46) 76.7%)`,
    width: "100%",
    height: "100%",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    fontSize: "0.8rem",
    fontWeight: 400,
    textTransform: "uppercase",
  },
};
