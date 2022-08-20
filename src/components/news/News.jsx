import React from "react";
// import { Link } from "react-router-dom";

import styles from "./news.module.scss";
import CardProduct from "../products/cardProduct/CardProduct";
import BtnCircle from "../buttons/btnCircle/BtnCircle";
const News = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Novedades</h2>
      <div> VER TODO</div>
      <div className={styles.contentProduct}>
        <CardProduct />
        <CardProduct />
      </div>
      <div className={styles.contentButton}>
        <BtnCircle className={styles.left} icon="left" />
        <BtnCircle className={styles.right} icon="right" />
      </div>
    </div>
  );
};

export default News;
