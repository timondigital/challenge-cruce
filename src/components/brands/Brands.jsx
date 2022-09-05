import React from "react";

import BtnGroup from "../buttons/btnGroup/BtnGroup";
import styles from "./brands.module.scss";

const images = require.context("../../img/brands/", true);
const Brands = () => {
  return (
    <div className={styles.contentBrands}>
      <h3 className={` ${styles.title} title`}>Nuestras marcas</h3>
      <div className={styles.contentSlide}>
        <BtnGroup className={styles.btnGroup} />
        <div className={styles.contentBrands}>
          <div className={styles.contentImg}>
            <img src={images("./marvel.png")} alt="logo MARVEL" />
          </div>
          <div className={styles.contentImg}>
            <img src={images("./disney.png")} alt="logo Disney" />
          </div>
          <div className={styles.contentImg}>
            <img src={images("./funko.png")} alt="logo Funko" />
          </div>
          <div className={styles.contentImg}>
            <img src={images("./lol.png")} alt="logo LOL" />
          </div>
          <div className={styles.contentImg}>
            <img src={images("./marvel.png")} alt="logo MARVEL" />
          </div>
          <div className={styles.contentImg}>
            <img src={images("./disney.png")} alt="logo Disney" />
          </div>
          <div className={styles.contentImg}>
            <img src={images("./funko.png")} alt="logo Funko" />
          </div>
          <div className={styles.contentImg}>
            <img src={images("./lol.png")} alt="logo LOL" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
