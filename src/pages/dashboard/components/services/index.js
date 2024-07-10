import React from "react";
import rightBall from "../../../../assets/right-ball.png";
import leftBall from "../../../../assets/pink-ball.png";
import dottedBall from "../../../../assets/dots-ball.png";
import greenSpot from "../../../../assets/green-spot.png";
import pinkSpot from "../../../../assets/pink-spot.png";
import blueSpot from "../../../../assets/blue-spot.png";
import leftLine from "../../../../assets/left-line.png";
import rightLine from "../../../../assets/right-line.png";
import leftPink from "../../../../assets/left-pink.png";
import leftGreen from "../../../../assets/left-green.png";
import Games from "./games";
import { styled } from 'styled-components';


const OutlinedText = styled.span`
  font-size: 4.5rem;
  font-style: normal;
  font-weight: 600;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: 'Lexend', sans-serif;
  text-shadow: ${({ strokeColor, strokeWidth }) =>
    "-" + strokeWidth + "px -" + strokeWidth + "px  0 " + strokeColor + ", "
    + "0px -" + strokeWidth + "px 0 " + strokeColor + ", "
    + "" + strokeWidth + "px -" + strokeWidth + "px  0 " + strokeColor + ", "
    + "" + strokeWidth + "px 0px  0 " + strokeColor + ", "
    + "" + strokeWidth + "px " + strokeWidth + "px  0 " + strokeColor + ", "
    + "0px " + strokeWidth + "px  0 " + strokeColor + ", "
    + "-" + strokeWidth + "px " + strokeWidth + "px  0 " + strokeColor + ", "
    + "-" + strokeWidth + "px 0px  0 " + strokeColor + ""};
  paint-order: fill stroke; 
`;

const Services = () => {
  return (
    <>
      <div style={styles.wrapper}>
        <div style={{ position: "absolute", width: "100%" }}>
          <div style={styles.rightBall}></div>
          <div style={styles.pinkSpot}></div>
          <div style={styles.greenSpot}></div>
          <div style={styles.centerBall}></div>
        </div>
        <div style={styles.title}>
          <OutlinedText strokeWidth={0.7} strokeColor={"#12D6DF"}>GAMES</OutlinedText>
        </div>
        <div style={styles.leftBall}></div>
        <div style={styles.blueSpot}></div>
        <div style={styles.leftLine}></div>
        <div style={styles.innerWrapper}>
          <Games />
        </div>

        <div style={styles.title}>
          <OutlinedText strokeWidth={0.7} strokeColor={"#12D6DF"}>HOW TO BUY</OutlinedText>
        </div>
      </div>
      <div style={styles.brandWrap}>
        <span id="brand" style={styles.brand}>
<ul>
  <h3>Phase One:</h3>
  <li>1. Goto: <a href="https://app.uniswap.org/swap?outputCurrency=0xB39cf0E19858b5fD3329a91F95A100409c69772A&chain=ethereum">Click Here</a></li>
  <li>2. When you have WQOM, bridge it to QOM chain via: <a href="https://bridge.qom.one/">Click Here</a></li>
  <li>3. Add chain to metamask: <a href="https://chainlist.org/?search=Qom">Click Here</a></li>
  <li>4. Profit</li>

<br/>
  <h3>Phase One:</h3>
  <li>- 2222 NFT Mint</li>
  <li>- Token Launch</li>
  <li>- QARTEL Slots</li>
  <li>- NFT Staking. Boosted QOM Pool/Casino Revenue</li>
  <li>- Token Staking For QOM Pool</li>
</ul>
        </span>
      </div>
      <div style={styles.empty}>
        <div style={styles.rightLine}></div>
        <div style={styles.rightPink}></div>
        <div style={styles.leftGreen}></div>
      </div>

    </>
  );
};

export default Services;

const styles = {
  wrapper: {
    width: "100vw",
    position: "relative",
    paddingTop: 60,
  },
  centerBall: {
    backgroundImage: `url(${dottedBall})`,
    backgroundSize: "cover",
    width: 400,
    height: 400,
    margin: "auto",
    zIndex: -1,
  },
  leftBall: {
    backgroundImage: `url(${leftBall})`,
    backgroundSize: "contain",
    position: "absolute",
    left: 0,
    height: 500,
    width: 150,
    bottom: 0,
    backgroundRepeat: "no-repeat",
    zIndex: -1,
  },
  rightBall: {
    backgroundImage: `url(${rightBall})`,
    position: "absolute",
    right: 0,
    height: 500,
    width: 100,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    top: -80,
    zIndex: -1,
  },
  greenSpot: {
    backgroundImage: `url(${greenSpot})`,
    position: "absolute",
    right: 0,
    height: 500,
    width: 200,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    top: -50,
  },
  pinkSpot: {
    backgroundImage: `url(${pinkSpot})`,
    position: "absolute",
    left: 0,
    height: 500,
    width: 200,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    top: -100,
  },
  blueSpot: {
    backgroundImage: `url(${blueSpot})`,
    width: 100,
    position: "absolute",
    height: 100,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    bottom: 200,
    zIndex: 5,
  },
  leftLine: {
    backgroundImage: `url(${leftLine})`,
    width: 300,
    position: "absolute",
    height: 400,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    bottom: -200,
    left: 50,
  },
  rightLine: {
    backgroundImage: `url(${rightLine})`,
    width: 150,
    position: "absolute",
    height: 400,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    top: 120,
    right: 0,
  },
  rightPink: {
    backgroundImage: `url(${leftPink})`,
    width: 150,
    position: "absolute",
    height: 400,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    top: 100,
    right: 0,
  },
  leftGreen: {
    backgroundImage: `url(${leftGreen})`,
    width: 150,
    position: "absolute",
    height: 400,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    bottom: -100,
    left: 0,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  gameName: {
    color: "transparent",
    fontFamily: "Lexend",
    fontOpticalsizing: "auto",
    fontWeight: 900,
    fontSize: "4rem",
    // fontStyle: "normal",
    // outerWidth: 2,
    WebkitTextStrokeWidth: "2px",
    WebkitTextStrokeColor: "#12D6DF",
  },
  comName: {
    color: "transparent",
    fontFamily: "Lexend",
    fontOpticalsizing: "auto",
    fontWeight: 900,
    fontSize: "4rem",
    fontStyle: "normal",
    WebkitTextStrokeWidth: "2px",
    WebkitTextStrokeColor: "#12D6DF",
  },
  game: {
    width: "100%",
    height: "100%",
    paddingLeft: 20,
    maxWidth: 250,
    maxHeight: 250,
  },
  innerWrapper: {
    width: "100%",
    background: 'black'
  },
  empty: {
    paddingTop: 700,
    position: "relative",
  },
  brandWrap: {
    paddingTop: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // gap: 20,
  },
  brand: {
    fontSize: "4rem",
    fontFamily: "Audiowide",
    fontOpticalsizing: "auto",
    fontStyle: "normal",
  },
};
