import React from "react";

import styles from "./btnUp.module.scss";
import Icon from "../../icon/Icon";
const BtnUp = (props) => {
  return (
    <div className={`${styles.btn} ${props.className}`}>
      <Icon icon="arrow_up" className={styles.icon} />
      <div className={styles.text}>SUBIR</div>
    </div>
  );
};

export default BtnUp;
