import React from "react";

import styles from "./dataProduct.module.scss";
import { useState } from "react";

const DataCard = (props) => {
  const [off, setOff] = useState(true);

  return (
    <div className={`${styles.dataContent} ${props.className}`}>
      <div className={styles.dataGroup}>
        <h2 className={`${styles.title} title`}>Funko</h2>
        <h5 className={styles.description}>
          Funko POP | Game Of Thrones - Daen...
        </h5>
      </div>
      <div className={styles.priceGroup}>
        <div className={styles.fee}>6 Cuotas s/interés</div>
        <div className={styles.priceFee}>$211,50</div>
        <div className={styles.price}>
          Final:
          {off ? (
            <>
              <span className={styles.priceListOffer}>$2.390</span>
              <span className={styles.priceOffer}>$1.269</span>
            </>
          ) : (
            <>
              <span className={styles.priceList}>$2.390</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataCard;
