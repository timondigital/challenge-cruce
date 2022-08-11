import React from "react";

import styles from "./cardHome.module.scss";
const CardHome = () => {
  return (
    <>
      <img className={styles.productImg} src="#" alt="descripcion" />
      <div className={styles.dataContent}>
        <h2 className={styles.title}>titulo</h2>
        <h5 className={styles.description}>
          Funko POP | Game Of Thrones - Daen...
        </h5>
        <div className={styles.fee}>6 Cuotas s/interés</div>
        <div className={styles.priceFee}>$211,50</div>
        <div className={styles.price}>
          Final:
          <span className={styles.priceList}>$2.390</span>
          <span className={styles.priceOffer}>$1.269</span>
        </div>
      </div>
      <div className={styles.offer}>
        <div className={styles.percentage}>10%</div>
        <img className={styles.imgOffer} src="#" alt="oferta" />
      </div>
    </>
  );
};

export default CardHome;
