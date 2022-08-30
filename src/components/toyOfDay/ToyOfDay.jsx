import React, { useEffect, useState } from "react";

import video from "../../img/video/video.png";

import product from "../../img/products/product1.png";
import CardProductHorizontal from "../products/cardProductHorizontal/CardProductHorizontal";
import CardProduct from "../products/cardProduct/CardProduct";

import styles from "./toyOfDay.module.scss";
const ToyOfDay = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  const desktopScreenWidth = 1366;
  const tabletScreenWidth = 768;

  // useEffect(() => {
  //   sethiddenMenu(true);
  // }, [widthScreen]);
  //  ver como usar setWidthScreen() cuando se cambia el tamaño de pantalla

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Juguete del día</h2>
      {widthScreen < tabletScreenWidth ? (
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
