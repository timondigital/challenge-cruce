import React from "react";

import Icon from "../../icon/Icon";

//styles
import styles from "./btnPagination.module.scss";

const BtnPagination = () => {
  return (
    <div className={styles.contentPagination}>
      <div className={styles.iconContent}>
        <Icon icon="arrow_left" className={`${styles.icon} ${styles.left}`} />
      </div>
      <div className={styles.numContent}>4</div>
      <div className={styles.numContent}>5</div>
      <div className={`${styles.numContent} ${styles.active}`}>6</div>
      <div className={styles.numContent}>7</div>
      <div className={styles.numContent}>8</div>
      <div className={styles.iconContent}>
        <Icon icon="arrow_right" className={`${styles.icon} ${styles.right}`} />
      </div>
    </div>
  );
};

export default BtnPagination;
