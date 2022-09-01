import React, { useState, useEffect, useWindowSize } from "react";

//icons
import Icon from "../icon/Icon";

//components
import BtnNav from "../buttons/btnNav/BtnNav";

//styles
import styles from "./header.module.scss";
import Nav from "../nav/Nav";

const Header = () => {
  const [hiddenMenu, sethiddenMenu] = useState(true);
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  const desktopScreenWidth = 1366;
  const handlehiddenMenu = () => {
    sethiddenMenu(!hiddenMenu);
  };

  useEffect(() => {
    sethiddenMenu(true);
  }, [widthScreen]);

  //  ver como usar setWidthScreen() cuando se cambia el tamaño de pantalla
  // console.log(window.screen.width);
  const size = useWindowSize();

  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  }
  console.log(size);

  return (
    <header className={styles.header}>
      <nav
        className={styles.nav}
        onClick={widthScreen <= desktopScreenWidth ? handlehiddenMenu : null}
      >
        {hiddenMenu ? (
          <>
            <BtnNav icon="menu" />
            <Nav showNav={false} />
          </>
        ) : (
          <>
            <BtnNav icon="close" />
            <Nav showNav={true} />
          </>
        )}
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
          <div className={styles.numProduct}>3</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
