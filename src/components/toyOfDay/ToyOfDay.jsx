import React from "react";

import video from "../../img/video/video.png";

import product from "../../img/products/product1.png";
import CardProductHorizontal from "../products/cardProductHorizontal/CardProductHorizontal";

import styles from "./toyOfDay.module.scss";
const ToyOfDay = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Juguete del día</h2>
      <img className={styles.img} src={video} alt="video promocion del día" />
      <CardProductHorizontal img={product} />
    </div>
  );
};

export default ToyOfDay;
