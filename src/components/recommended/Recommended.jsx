import React, { useState, useEffect } from "react";
import useDetectedScreen from "../../hooks/useDetectedScreen.js";

import CardProduct from "../products/cardProduct/CardProduct";
import BtnGroup from "../buttons/btnGroup/BtnGroup";
import product from "../../img/products/product1.png";
import backpack from "../../img/products/backpack2.png";
import products from "../../asset/constant/product.json";

//styles
import styles from "./recommended.module.scss";

const productImg = require.context("../../img/products", true);

const Recommended = () => {
  const sizeScreen = useDetectedScreen();
  const [typeScreen, setTypeScreen] = useState(sizeScreen);

  const cardProduct = () => {
    switch (typeScreen) {
      case "phone":
        return (
          <>
            <CardProduct
              className={styles.cardProduct}
              classNameData={styles.data}
              classNameImg={styles.img}
              img={productImg(products[0].img)}
              description={products[0].description}
              off={products[0].off}
              price={products[0].price}
              priceOffer={products[0].priceOffer}
              brand={products[0].brand}
              inStock={products[0].inStock}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameData={styles.data}
              classNameImg={styles.img}
              img={productImg(products[1].img)}
              description={products[1].description}
              off={products[1].off}
              price={products[1].price}
              priceOffer={products[1].priceOffer}
              brand={products[1].brand}
              inStock={products[1].inStock}
            />
          </>
        );
        break;
      case "tablet":
        return (
          <>
            <CardProduct
              className={styles.cardProduct}
              classNameData={styles.data}
              classNameImg={styles.img}
              img={productImg(products[8].img)}
              description={products[8].description}
              off={products[8].off}
              price={products[8].price}
              priceOffer={products[8].priceOffer}
              brand={products[8].brand}
              inStock={products[8].inStock}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameData={styles.data}
              classNameImg={styles.img}
              img={productImg(products[1].img)}
              description={products[1].description}
              off={products[1].off}
              price={products[1].price}
              priceOffer={products[1].priceOffer}
              brand={products[1].brand}
              inStock={products[1].inStock}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameData={styles.data}
              classNameImg={styles.img}
              img={productImg(products[8].img)}
              description={products[8].description}
              off={products[8].off}
              price={products[8].price}
              priceOffer={products[8].priceOffer}
              brand={products[8].brand}
              inStock={products[8].inStock}
            />
          </>
        );
        break;
      case "desktop":
        return (
          <>
            <CardProduct
              className={styles.cardProduct}
              classNameData={styles.data}
              classNameImg={styles.img}
              img={productImg(products[1].img)}
              description={products[1].description}
              off={products[1].off}
              price={products[1].price}
              priceOffer={products[1].priceOffer}
              brand={products[1].brand}
              inStock={products[1].inStock}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameData={styles.data}
              classNameImg={styles.img}
              img={productImg(products[8].img)}
              description={products[8].description}
              off={products[8].off}
              price={products[8].price}
              priceOffer={products[8].priceOffer}
              brand={products[8].brand}
              inStock={products[8].inStock}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameData={styles.data}
              classNameImg={styles.img}
              img={productImg(products[1].img)}
              description={products[1].description}
              off={products[1].off}
              price={products[1].price}
              priceOffer={products[1].priceOffer}
              brand={products[1].brand}
              inStock={products[1].inStock}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameData={styles.data}
              classNameImg={styles.img}
              img={productImg(products[8].img)}
              description={products[8].description}
              off={products[8].off}
              price={products[8].price}
              priceOffer={products[8].priceOffer}
              brand={products[8].brand}
              inStock={products[8].inStock}
            />
          </>
        );
        break;
      default:
        <> </>;
    }
  };

  useEffect(() => {
    setTypeScreen(sizeScreen);
    cardProduct();
  }, [sizeScreen]);

  return (
    <div className={styles.content}>
      <div className={styles.contentHeader}>
        <h2 className={`${styles.title} title`}>Te recomendamos</h2>
        <div className={styles.allView}> VER TODO</div>
      </div>
      <div className={styles.contentProduct}>{cardProduct()}</div>
      <div className={styles.recommendedFooter}>
        <BtnGroup />
        <div className={styles.pagination}>2 de 12</div>
      </div>
    </div>
  );
};

export default Recommended;
