import React from "react";
import BtnCircle from "../btnCircle/BtnCircle";
import styles from "./btnGroup.module.scss";
const BtnGroup = () => {
  return (
    <div className={styles.contentButtons}>
      <div className={`${styles.contentBtnCircle}`}>
        <BtnCircle icon="left" />
      </div>
      <div className={`${styles.contentBtnCircle}`}>
        <BtnCircle icon="right" />
      </div>
    </div>
  );
};

export default BtnGroup;
