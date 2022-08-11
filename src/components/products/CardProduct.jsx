import React from "react";
import offer from "../../img/offer.png";
import product from "../../img/products/product2.png";
import styles from "./cardProduct.module.scss";
const CardProduct = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContent}>
        <img className={styles.productImg} src={product} alt="descripcion" />
        <div className={styles.offer}>
          <div className={styles.percentage}>
            10<span>%</span>
          </div>
          <img className={styles.imgOffer} src={offer} alt="oferta" />
        </div>
      </div>
      <div className={styles.dataContent}>
        <div className={styles.dataGroup}>
          <h2 className={styles.title}>Funko</h2>
          <h5 className={styles.description}>
            Funko POP | Game Of Thrones - Daen...
          </h5>
        </div>
        <div className={styles.priceGroup}>
          <div className={styles.fee}>6 Cuotas s/interés</div>
          <div className={styles.priceFee}>$211,50</div>
          <div className={styles.price}>
            Final:
            <span className={styles.priceList}>$2.390</span>
            <span className={styles.priceOffer}>$1.269</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
