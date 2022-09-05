import React from "react";
import { Link } from "react-router-dom";

//components
import styles from "./btnUp.module.scss";

//styles
import Icon from "../../icon/Icon";

const BtnUp = (props) => {
  return (
    <Link className={`${styles.btn} ${props.className}`} to="#inicio">
      <Icon icon="arrow_up" className={styles.icon} />
      <div className={styles.text}>SUBIR</div>
    </Link>
  );
};

export default BtnUp;
