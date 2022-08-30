import React from "react";
import Icon from "../../icon/Icon";
import styles from "./btnShop.module.scss";
const BtnShop = (props) => {
  return (
    <div className={`${styles.content} ${props.className}`}>
      <Icon
        icon="shopping"
        className={`${styles.icon} ${props.classNameIcon}`}
      />
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};

export default BtnShop;
