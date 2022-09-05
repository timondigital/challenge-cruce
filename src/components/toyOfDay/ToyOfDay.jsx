import React, { useEffect, useState } from "react";
import useDetectedScreen from "../../hooks/useDetectedScreen.js";

import video from "../../img/video/video.png";

import CardProductHorizontal from "../products/cardProductHorizontal/CardProductHorizontal";
import CardProduct from "../products/cardProduct/CardProduct";

import products from "../../asset/constant/product.json";
import styles from "./toyOfDay.module.scss";
const productImg = require.context("../../img/products", true);

const ToyOfDay = () => {
  const sizeScreen = useDetectedScreen();
  const [typeScreen, setTypeScreen] = useState(sizeScreen);

  useEffect(() => {
    setTypeScreen(sizeScreen);
  }, [sizeScreen]);

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Juguete del día</h2>
      {typeScreen === "phone" ? (
        <>
          <img
            className={styles.img}
            src={video}
            alt="video promocion del día"
          />
          <CardProductHorizontal
            className={styles.cardProductHorizontal}
            img={productImg(products[0].img)}
            description={products[0].description}
            off={products[0].off}
            price={products[0].price}
            priceOffer={products[0].priceOffer}
            brand={products[0].brand}
            inStock={products[0].inStock}
          />
        </>
      ) : (
        <>
          <CardProduct
            className={styles.cardProduct}
            img={productImg(products[0].img)}
            description={products[0].description}
            off={products[0].off}
            price={products[0].price}
            priceOffer={products[0].priceOffer}
            brand={products[0].brand}
            inStock={products[0].inStock}
          />
          <img
            className={styles.img}
            src={video}
            alt="video promocion del día"
          />
        </>
      )}
    </div>
  );
};

export default ToyOfDay;
