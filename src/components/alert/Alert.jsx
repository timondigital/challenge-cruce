import React, { useState } from "react";
import Icon from "../icon/Icon";

//styles
import styles from "./alert.module.scss";

const Alert = () => {
  const [showAlert, setshowAlert] = useState(true);

  return (
    <div className={showAlert ? styles.alertMainUp : styles.hidden}>
      <h3>Mantené pulsado cualquier artículo para agregarlo al carrito</h3>
      <div className={styles.closeAlert} onClick={() => setshowAlert(false)}>
        <Icon icon="close" className={styles.closeIcon} />
      </div>
    </div>
  );
};

export default Alert;
