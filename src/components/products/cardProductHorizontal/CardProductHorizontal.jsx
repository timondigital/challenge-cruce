import React from "react";

import DataProduct from "../cardsProductComponent/DataProduct";
import ImgProduct from "../cardsProductComponent/ImgProduct";

import styles from "./cardProductHorizontal.module.scss";

const CardProductHorizontal = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <div className={styles.productImg}>
        <ImgProduct img={props.img} />
      </div>
      <DataProduct className={styles.dataProduct} />
    </div>
  );
};

export default CardProductHorizontal;
