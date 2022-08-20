import React from "react";

import CardProduct from "./cardProduct/CardProduct";

import product from "../../img/products/product1.png";
import Btn from "../buttons/Btn";

//styles
import styles from "./products.module.scss";

const Products = () => {
  return (
    <>
      <h3 className={styles.title}>
        Llegó el invierno, encontralo antes que nadie{" "}
      </h3>
      <div className={styles.contentCardsProduct}>
        <CardProduct img={product} />
        <CardProduct img={product} />
        <CardProduct img={product} />
        <CardProduct img={product} />
      </div>
      <Btn text="Ver colección" />
    </>
  );
};

export default Products;
