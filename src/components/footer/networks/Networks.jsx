import React from "react";
import Icon from "../../icon/Icon";
import styles from "./networks.module.scss";

const Networks = () => {
  return (
    <div className={styles.contentNetworks}>
      <div className={styles.networks}>
        <div className={styles.text}>INSTAGRAM</div>
        <Icon icon="instagram" />
      </div>
      <div className={`${styles.networks} `}>
        <div className={styles.text}>YOUTUBE</div>
        <Icon icon="youtube" />
      </div>
      <div className={styles.networks}>
        <div className={styles.text}>FACEBOOK</div>
        <Icon icon="facebook" />
      </div>
    </div>
  );
};

export default Networks;
