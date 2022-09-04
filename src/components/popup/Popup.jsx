import React from "react";

import backgroud from "../../img/offer2.png";
import Icon from "../icon/Icon";

import styles from "./popup.module.scss";
import { useState } from "react";
const Popup = () => {
  const [hidden, setHidden] = useState(false);
  const handleHidden = () => setHidden(true);

  return (
    <div className={`${styles.content} ${hidden ? styles.hidden : ""}`}>
      <img className={styles.img} src={backgroud} alt="fondo popup" />
      <div className={styles.btnClose} onClick={handleHidden}>
        <Icon icon="close" />
      </div>
      <div className={styles.text}>Aprovechá hasta 18 cuotas sin interés</div>
    </div>
  );
};

export default Popup;
