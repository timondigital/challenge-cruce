import React, { useState, useEffect } from "react";

import CardProduct from "../products/cardProduct/CardProduct";
import BtnGroup from "../buttons/btnGroup/BtnGroup";
import product from "../../img/products/product1.png";
import backpack from "../../img/products/backpack2.png";

import styles from "./recommended.module.scss";

const Recommended = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [screen, setScreen] = useState("");

  const desktopScreenWidth = 1366;
  const tabletScreenWidth = 768;
  useEffect(() => {
    if (widthScreen < tabletScreenWidth) {
      setScreen("phone");
    } else if (widthScreen < desktopScreenWidth) {
      setScreen("tablet");
    } else {
      setScreen("desktop");
    }
  }, [widthScreen]);

  const cardProduct = () => {
    switch (screen) {
      case "phone":
        return (
          <>
            <CardProduct
              img={product}
              off={false}
              className={styles.cardProduct}
            />
            <CardProduct
              img={product}
              off={false}
              className={styles.cardProduct}
            />
          </>
        );
        break;
      case "tablet":
        return (
          <>
            <CardProduct
              img={backpack}
              off={false}
              className={styles.cardProduct}
            />
            <CardProduct
              img={product}
              off={false}
              className={styles.cardProduct}
            />
            <CardProduct
              img={backpack}
              off={false}
              className={styles.cardProduct}
            />
          </>
        );
        break;
      case "desktop":
        return (
          <>
            <CardProduct
              img={backpack}
              off={false}
              className={styles.cardProduct}
            />
            <CardProduct
              img={product}
              off={false}
              className={styles.cardProduct}
            />
            <CardProduct
              img={backpack}
              off={false}
              className={styles.cardProduct}
            />
            <CardProduct
              img={product}
              off={false}
              className={styles.cardProduct}
            />
          </>
        );
        break;
    }
  };
  return (
    <div className={styles.content}>
      <div className={styles.contentHeader}>
        <h2 className={`${styles.title} title`}>Te recomendamos</h2>
        <div className={styles.allView}> VER TODO</div>
      </div>
      <div className={styles.contentProduct}>{cardProduct()}</div>
      <div className={styles.newsFooter}>
        <BtnGroup />
        <div className={styles.pagination}>2 de 12</div>
      </div>
    </div>
  );
};

export default Recommended;
