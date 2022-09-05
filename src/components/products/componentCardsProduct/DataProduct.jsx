import React from "react";

import Btn from "../../buttons/Btn.jsx";
import styles from "./dataProduct.module.scss";

const DataCard = (props) => {
  const off = props.off;
  const inStock = props.inStock;

  return (
    <div className={`${styles.dataContent} ${props.className}`}>
      <div className={styles.dataGroup}>
        <h2 className={`${styles.title} title`}>{props.brand}</h2>
        <h5 className={styles.description}>{props.description}</h5>
      </div>
      <div className={styles.priceGroup}>
        {inStock ? (
          <>
            <div className={styles.fee}>6 Cuotas s/interés</div>
            <div className={styles.priceFee}>$211.50</div>
            <div className={styles.price}>
              Final:
              {off ? (
                <>
                  <span className={styles.priceListOffer}>
                    <del>${props.price}</del>
                  </span>
                  <span className={styles.priceOffer}>${props.priceOffer}</span>
                </>
              ) : (
                <>
                  <span className={styles.priceList}>${props.price}</span>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={`${styles.price} ${styles.outStock}`}>
              Final:
              <span className={styles.warning}> Artículo sin stock</span>
            </div>
            <Btn text="Ver artículo" className={styles.btnViewMore} />
          </>
        )}
      </div>
    </div>
  );
};

export default DataCard;
