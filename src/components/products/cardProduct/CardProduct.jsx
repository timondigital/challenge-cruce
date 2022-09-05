import React from "react";

import DataProduct from "../componentCardsProduct/DataProduct";
import ImgProduct from "../componentCardsProduct/ImgProduct";
import BtnShop from "../../buttons/btnShop/BtnShop";
import styles from "./cardProduct.module.scss";

const CardProduct = (props) => {
  const inStock = props.inStock;
  return (
    <div className={`${styles.card} ${props.className}`}>
      <ImgProduct
        img={props.img}
        off={props.off}
        className={`${styles.img} ${props.classNameImg}`}
      />
      <DataProduct
        className={props.classNameData}
        off={props.off}
        description={props.description}
        price={props.price}
        priceOffer={props.priceOffer}
        brand={props.brand}
        inStock={props.inStock}
      />
      {inStock ? (
        <BtnShop className={`${styles.btnShop}`} text="Agregar" />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardProduct;
