import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <Link className={styles.btn} to="/">
              LOL
            </Link>
            <Link className={styles.btn} to="/">
              CryBabies
            </Link>
            <Link className={styles.btn} to="/productsSections">
              Funko
            </Link>

            <Link className={`${styles.btn} ${styles.hotsale}`} to="/">
              <img src={hotSale} alt="hot sale" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
