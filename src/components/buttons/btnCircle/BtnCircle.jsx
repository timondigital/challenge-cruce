import React from "react";

import Icon from "../../icon/Icon";
import styles from "./btnCircle.module.scss";

const BtnCircle = (props) => {
  return (
    <div className={`${styles.arrow} ${props.className}`}>
      <Icon className={styles.iconArrow} icon={props.icon} />
    </div>
  );
};

export default BtnCircle;
