import React from "react";

import marvel from "../../img/brands/marvel.png";
import disney from "../../img/brands/disney.png";
import funko from "../../img/brands/funko.png";
import lol from "../../img/brands/lol.png";

import styles from "./brands.module.scss";
const Brands = () => {
  return (
    <>
      <h3 className={` ${styles.title} title`}>Nuestras marcas</h3>
      <div className={styles.contentBrands}>
        <div className={styles.contentImg}>
          <img src={marvel} alt="logo MARVEL" />
        </div>
        <div className={styles.contentImg}>
          <img src={disney} alt="logo Disney" />
        </div>
        <div className={styles.contentImg}>
          <img src={funko} alt="logo Funko" />
        </div>
        <div className={styles.contentImg}>
          <img src={lol} alt="logo LOL" />
        </div>
      </div>
    </>
  );
};

export default Brands;
