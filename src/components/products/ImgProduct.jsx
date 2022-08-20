import React from "react";

import offer from "../../img/offer.png";
import styles from "./imgProduct.module.scss";

const ImgCard = (props) => {
  return (
    <div className={`${styles.imgContent} `}>
      <img
        className={`${styles.productImg}`}
        src={props.img}
        alt="descripcion"
      />
      <div className={styles.offer}>
        <div className={styles.percentage}>
          10<span>%</span>
        </div>
        <img className={styles.imgOffer} src={offer} alt="oferta" />
      </div>
    </div>
  );
};

export default ImgCard;
