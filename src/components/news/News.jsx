import React, { useState } from "react";
import useDetectedScreen from "../../hooks/useDetectedScreen.js";

import CardProduct from "../products/cardProduct/CardProduct";
import BtnGroup from "../buttons/btnGroup/BtnGroup";
import product from "../../img/products/product1.png";
import backpack from "../../img/products/backpack2.png";

import styles from "./news.module.scss";
import { useEffect } from "react";

const News = () => {
  const sizeScreen = useDetectedScreen();
  const [typeScreen, setTypeScreen] = useState(sizeScreen);

  useEffect(() => {
    setTypeScreen(sizeScreen);
    cardProduct();
  }, [sizeScreen]);

  const cardProduct = () => {
    switch (typeScreen) {
      case "phone":
        return (
          <>
            <CardProduct
              img={product}
              off={false}
              description="Funko POP | Game Of Thrones - Daenerys 25"
              className={styles.cardProduct}
            />
            <CardProduct
              img={product}
              off={false}
              description="Funko POP | Game Of Thrones - Daenerys 25"
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
              description="Funko POP | Game Of Thrones - Daenerys 25"
              className={styles.cardProduct}
            />
            <CardProduct
              img={product}
              off={false}
              description="Funko POP | Game Of Thrones - Daenerys 25"
              className={styles.cardProduct}
            />
            <CardProduct
              img={backpack}
              off={false}
              description="Funko POP | Game Of Thrones - Daenerys 25"
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
              description="Funko POP | Game Of Thrones - Daenerys 25"
              className={styles.cardProduct}
            />
            <CardProduct
              img={product}
              off={false}
              description="Funko POP | Game Of Thrones - Daenerys 25"
              className={styles.cardProduct}
            />
            <CardProduct
              img={backpack}
              off={false}
              description="Funko POP | Game Of Thrones - Daenerys 25"
              className={styles.cardProduct}
            />
            <CardProduct
              img={product}
              off={true}
              description="Funko POP | Game Of Thrones - Daenerys 25"
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
        <h2 className={`${styles.title} title`}>Novedades</h2>
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

export default News;
