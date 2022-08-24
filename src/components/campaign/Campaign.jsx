import React from "react";

import imgPrimary from "../../img/products/img1.png";
import imgSecondary from "../../img/products/img2.png";
import imgProduct from "../../img/products/backpack.png";
import CardProduct from "../products/cardProduct/CardProduct";

import styles from "./campaign.module.scss";
import DataCard from "../products/DataProduct";
import BtnGroup from "../buttons/btnGroup/BtnGroup";

const Campaign = () => {
  return (
    <div className={styles.content}>
      <div className={styles.imgHeader}>
        <img
          className={styles.imgPrincipal}
          src={imgPrimary}
          alt="imagen de campaña principal"
        />
        <img
          className={styles.imgSecondary}
          src={imgSecondary}
          alt="imagen de campaña secundaria"
        />
      </div>
      <div className={styles.contentProduct}>
        <div className={styles.contentImg}>
          <img
            className={styles.imgProduct}
            src={imgProduct}
            alt="imagen producto"
          />
        </div>
        <DataCard />
        <div className={styles.footerProduct}>
          <div className={styles.pagination}>1 de 3</div>
          <BtnGroup />
        </div>
      </div>
    </div>
  );
};

export default Campaign;
