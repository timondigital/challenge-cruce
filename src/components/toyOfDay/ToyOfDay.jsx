import React, { useEffect, useState } from "react";
import useDetectedScreen from "../../hooks/useDetectedScreen.js";

import video from "../../img/video/video.png";

import product from "../../img/products/product1.png";
import CardProductHorizontal from "../products/cardProductHorizontal/CardProductHorizontal";
import CardProduct from "../products/cardProduct/CardProduct";

import styles from "./toyOfDay.module.scss";
const ToyOfDay = () => {
  const sizeScreen = useDetectedScreen();
  const [typeScreen, setTypeScreen] = useState(sizeScreen);

  useEffect(() => {
    setTypeScreen(sizeScreen);
  }, [sizeScreen]);

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Juguete del día</h2>
      {typeScreen == "phone" ? (
        <>
          <img
            className={styles.img}
            src={video}
            alt="video promocion del día"
          />
          <CardProductHorizontal
            img={product}
            off={true}
            className={styles.cardProductHorizontal}
          />
        </>
      ) : (
        <>
          <CardProduct
            img={product}
            className={styles.cardProduct}
            off={true}
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
