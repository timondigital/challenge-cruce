import React, { useState, useEffect } from "react";

import hotSale from "../../img/hotsale_btn.png";
import styles from "./nav.module.scss";

const Nav = (props) => {
  const [showNav, setshowNav] = useState(false);

  const handleShowNav = () => setshowNav(false);

  useEffect(() => {
    setshowNav(props.showNav);
  }, [props.showNav]);

  return (
    <>
      <div
        className={`${styles.background} ${
          showNav ? styles.show : styles.hidden
        }`}
        onClick={handleShowNav}
      ></div>
      <div className={`${styles.nav} ${showNav ? styles.show : styles.hidden}`}>
        <div className={styles.sectionGroup}>
          <h2 className={styles.title}>Categorías</h2>
          <div className={styles.btnGroup}>
            <div className={styles.btn}>LOL</div>
            <div className={styles.btn}>CryBabies</div>
            <div className={styles.btn}>Funko</div>
            <div className={`${styles.btn} ${styles.hotsale}`}>
              <img src={hotSale} alt="hot sale" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
