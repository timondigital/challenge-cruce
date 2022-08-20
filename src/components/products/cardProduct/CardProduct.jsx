import React from "react";

import DataProduct from "../DataProduct";
import ImgProduct from "../ImgProduct";

import styles from "./cardProduct.module.scss";

const CardProduct = (props) => {
  return (
    <div className={`${styles.card} `}>
      <ImgProduct img={props.img} />
      <DataProduct />
    </div>
  );
};

export default CardProduct;
