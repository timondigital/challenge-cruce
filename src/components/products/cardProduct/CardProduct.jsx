import React from "react";

import DataProduct from "../DataProduct";
import ImgProduct from "../ImgProduct";

import styles from "./cardProduct.module.scss";

const CardProduct = () => {
  return (
    <div className={`${styles.card} `}>
      <ImgProduct />
      <DataProduct />
    </div>
  );
};

export default CardProduct;
