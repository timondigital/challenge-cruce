import React from "react";

import CardProduct from "./cardProduct/CardProduct";

import product from "../../img/products/product1.png";
import Btn from "../buttons/Btn";

//styles
import styles from "./products.module.scss";

const Products = () => {
  return (
    <>
      <div className={styles.contentCardsProduct}>
        <h3 className={`${styles.title} title`}>
          Llegó el invierno, encontralo antes que nadie
        </h3>
        <p>La colección más completa de Game of Thrones está en X</p>
        <Btn className={styles.btnBotton} text="Ver colección" />
        <CardProduct
          className={`${styles.product} ${styles.num1}`}
          img={product}
        />
        <CardProduct
          className={`${styles.product} ${styles.num2}`}
          img={product}
        />
        <CardProduct
          className={`${styles.product} ${styles.num3}`}
          img={product}
        />
        <CardProduct
          className={`${styles.product} ${styles.num4}`}
          img={product}
        />
        <CardProduct
          className={`${styles.product} ${styles.num5}`}
          img={product}
        />{" "}
        <CardProduct
          className={`${styles.product} ${styles.num6}`}
          img={product}
        />
      </div>
    </>
  );
};

export default Products;
