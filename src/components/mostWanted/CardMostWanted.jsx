import React from "react";

import "./cardMostWanted.module.scss";

import styles from "./cardMostWanted.module.scss";

const CardMostWanted = (props) => {
  return (
    <div className={styles.content}>
      <img
        src={props.product}
        className={styles.productImg}
        alt={`imagen ${props.text}`}
      />
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default CardMostWanted;
