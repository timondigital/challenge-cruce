import React, { useState } from "react";

import "./cardMostWanted.module.scss";

import styles from "./cardMostWanted.module.scss";

const CardMostWanted = (props) => {
  const [off, setOff] = useState(props.off);

  return (
    <div className={`${styles.content} ${props.className}`}>
      <img
        src={props.product}
        className={styles.productImg}
        alt={`imagen ${props.text}`}
      />
      <div className={styles.contentData}>
        <p className={styles.text}>{props.text}</p>
        {off ? (
          <>
            <div className={styles.offerPrice}>${props.offerPrice}</div>
            <div className={styles.price}>${props.price}</div>
          </>
        ) : (
          <>
            <div className={styles.price}>{props.price}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardMostWanted;
