import React from "react";
// import { Link } from "react-router-dom";

import CardProduct from "../products/cardProduct/CardProduct";
import BtnGroup from "../buttons/btnGroup/BtnGroup";
import product from "../../img/products/product1.png";

import styles from "./news.module.scss";

const News = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentHeader}>
        <h2 className={styles.title}>Novedades</h2>
        <div className={styles.allView}> VER TODO</div>
      </div>
      <div className={styles.contentProduct}>
        <CardProduct img={product} />
        <CardProduct img={product} />
      </div>
      <div className={styles.newsFooter}>
        <BtnGroup />

        <div className={styles.pagination}>2 de 12</div>
      </div>
    </div>
  );
};

export default News;
