import React from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./btn.module.scss";

const Btn = ({ text }) => {
  return <div className={styles.btn}>{text}</div>;

  //   <Link to="#">{text}</Link>;
};

export default Btn;
