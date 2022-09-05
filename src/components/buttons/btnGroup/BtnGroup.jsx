import React from "react";

//components
import BtnCircle from "../btnCircle/BtnCircle";

//styles
import styles from "./btnGroup.module.scss";

const BtnGroup = (props) => {
  return (
    <div className={`${styles.contentButtons} ${props.className}`}>
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
