import React from "react";

//components
import Icon from "../../icon/Icon";

//styles
import styles from "./networks.module.scss";

const Networks = (props) => {
  return (
    <div className={`${styles.contentNetworks} ${props.className}`}>
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
