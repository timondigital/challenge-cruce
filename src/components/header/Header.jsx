import React, { useState, useEffect } from "react";
import useDetectedScreen from "../../hooks/useDetectedScreen.js";

//components
import Icon from "../icon/Icon";
import BtnNav from "../buttons/btnNav/BtnNav";
import Nav from "../nav/Nav";

//styles
import styles from "./header.module.scss";

const Header = () => {
  const sizeScreen = useDetectedScreen();
  const [typeScreen, setTypeScreen] = useState(sizeScreen);
  const [hiddenMenu, sethiddenMenu] = useState(true);

  const handlehiddenMenu = () => {
    sethiddenMenu(!hiddenMenu);
  };

  useEffect(() => {
    setTypeScreen(sizeScreen);
  }, [sizeScreen]);

  return (
    <header className={styles.header}>
      <nav
        className={styles.nav}
        onClick={
          typeScreen === "phone" || typeScreen === "tablet"
            ? handlehiddenMenu
            : null
        }
      >
        <BtnNav icon={hiddenMenu ? "menu" : "close"} />
        <Nav showNav={hiddenMenu ? false : true} />
      </nav>
      <Icon icon="cruce" className={styles.cruceLogo} />
      <div className={styles.btnsRight}>
        <div className={styles.search}>
          <Icon icon="search" className={styles.searchIcon} />
        </div>
        <div className={styles.user}>
          <Icon icon="user" className={styles.userIcon} />
        </div>
        <div className={styles.shop}>
          <Icon icon="shopping" className={styles.shoppingIcon} />
          <sub className={styles.numProduct}>3</sub>
        </div>
      </div>
    </header>
  );
};

export default Header;
