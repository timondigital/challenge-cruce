import React from "react";

import CardProduct from "./CardProduct";
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
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <Btn text="Ver colección" />
    </>
  );
};

export default Products;
