import React from "react";

//components
import Icon from "../../icon/Icon";

//styles
import styles from "./btnCircle.module.scss";

const BtnCircle = (props) => {
  return (
    <div className={`${styles.arrow} `}>
      <Icon className={styles.iconArrow} icon={props.icon} />
    </div>
  );
};

export default BtnCircle;
