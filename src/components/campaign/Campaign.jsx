import React from "react";

import imgPrimary from "../../img/products/img1.png";
import imgSecondary from "../../img/products/img2.png";
import imgProduct from "../../img/products/backpack.png";
import BtnShop from "../buttons/btnShop/BtnShop";
import styles from "./campaign.module.scss";
import DataCard from "../products/componentCardsProduct/DataProduct";
import BtnGroup from "../buttons/btnGroup/BtnGroup";

import products from "../../asset/constant/product.json";
const productImg = require.context("../../img/products", true);

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
            src={productImg(products[0].img)}
            alt="imagen producto"
          />
        </div>
        <DataCard
          className={styles.dataCard}
          off={products[0].off}
          description={products[0].description}
          price={products[0].price}
          priceOffer={products[0].priceOffer}
          brand={products[0].brand}
          inStock={products[0].inStock}
        />
        <BtnShop className={`${styles.btnShop}`} text="Agregar" />
        <div className={styles.footerProduct}>
          <div className={styles.pagination}>1 de 3</div>
          <BtnGroup />
        </div>
      </div>
    </div>
  );
};

export default Campaign;
