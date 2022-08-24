import React from "react";

//styles
import styles from "./btn.module.scss";

const Btn = ({ text, className }) => {
  return <div className={`${styles.btn} ${className}`}>{text}</div>;
};

export default Btn;
