import React from "react";

//images
import offer from "../../../img/offer.png";

//styles
import styles from "./imgProduct.module.scss";

const ImgCard = (props) => {
  const off = props.off;
  return (
    <div className={`${styles.imgContent} ${props.className}`}>
      <img
        className={`${styles.productImg}`}
        src={props.img}
        alt="imagen producto"
      />
      {off ? (
        <div className={styles.offer}>
          <div className={styles.percentage}>
            10<span>%</span>
          </div>
          <img className={styles.imgOffer} src={offer} alt="oferta" />
        </div>
      ) : null}
    </div>
  );
};

export default ImgCard;
