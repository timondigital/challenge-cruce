import React from "react";

import DataProduct from "../cardsProductComponent/DataProduct";
import ImgProduct from "../cardsProductComponent/ImgProduct";
import BtnShop from "../../buttons/btnShop/BtnShop";
import styles from "./cardProduct.module.scss";

const CardProduct = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <ImgProduct img={props.img} off={props.off} />
      <DataProduct off={props.off} />
      <BtnShop className={`${styles.btnShop}`} text="Agregar" />
    </div>
  );
};

export default CardProduct;
