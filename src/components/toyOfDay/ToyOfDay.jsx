import React from "react";

import video from "../../img/video/video.png";

import styles from "./toyOfDay.module.scss";
import "./toyOfToday.scss";
import CardProductHorizontal from "../products/cardProductHorizontal/CardProductHorizontal";

const ToyOfDay = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Juguete del día</h2>
      <img className={styles.img} src={video} alt="video promocion del día" />
      <CardProductHorizontal />
    </div>
  );
};

export default ToyOfDay;
