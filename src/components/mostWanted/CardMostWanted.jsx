import React from "react";

import "./cardMostWanted.module.scss";

import styles from "./cardMostWanted.module.scss";

const CardMostWanted = (props) => {
  const off = props.off;

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
            <div className={styles.offerPrice}>
              <del>${props.offerPrice}</del>
            </div>
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
