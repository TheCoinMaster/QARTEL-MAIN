import React, { useState, useEffect } from "react";

const MENU = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Casino",
    link: "https://qartel.app/casino",
  },
  {
    name: "NFTS",
    link: "https://nft.qartel.app",
  },
  {
    name: "Staking",
    link: "https://stake.qartel.app",
  },
];

const Menue = () => {
  const [selected, setSelected] = useState(() => {
    return localStorage.getItem("selectedMenu") || "About";
  });

  useEffect(() => {
    localStorage.setItem("selectedMenu", selected);
  }, [selected]);

  const handleClick = (menuName) => {
    setSelected(menuName);
  };

  const handleTouch = (menuName) => {
    setSelected(menuName);
  };

  return (
    <div style={styles.wrapper}>
      {MENU.map((menu) => (
        <div
          style={styles.menu}
          key={menu.name}
          onClick={() => handleClick(menu.name)}
          onTouchStart={() => handleTouch(menu.name)}
        >
          <a
            href={menu.link}
            style={{
              ...styles.menuTxt,
              fontWeight: selected === menu.name ? 600 : 400,
              color: selected === menu.name ? "#FF00D6" : "#75FFFF",
              textDecoration: "none",
            }}
          >
            {menu.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Menue;

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "12%",
    paddingTop: 20,
  },
  menu: {
    color: "white",
  },
  menuTxt: {
    fontFamily: "Exo",
    cursor: "pointer",
    fontSize: "2rem",
  },
};
