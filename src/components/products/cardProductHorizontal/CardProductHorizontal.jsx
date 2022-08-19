import React from "react";

import DataProduct from "../DataProduct";
import ImgProduct from "../ImgProduct";

import styles from "./cardProductHorizontal.module.scss";

const CardProductHorizontal = () => {
  return (
    <div className={`${styles.card} `}>
      <div className={styles.productImg}>
        <ImgProduct />
      </div>
      <DataProduct />
    </div>
  );
};

export default CardProductHorizontal;
