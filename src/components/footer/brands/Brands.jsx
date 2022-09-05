import React from "react";

//components
import Icon from "../../icon/Icon";

//images
import cace from "../../../img/brands/cace.png";
import ahora18 from "../../../img/brands/ahora18.png";
import hotSale from "../../../img/brands/hotsale.png";
import afip from "../../../img/brands/afip.png";

//styles
import styles from "./brands.module.scss";

const Brands = () => {
  return (
    <div className={styles.contentBrands}>
      <div className={styles.lineOne}>
        <div className={styles.icon}>
          <img src={cace} alt="icono" />
        </div>
        <div className={styles.icon}>
          <img src={ahora18} alt="icono" />
        </div>
        <div className={styles.icon}>
          <img src={hotSale} alt="icono" />
        </div>
      </div>
      <div className={styles.lineTwo}>
        <div className={`${styles.icon} ${styles.afip}`}>
          <img src={afip} alt="icono" />
        </div>
        <div className={`${styles.icon} ${styles.vtex}`}>
          <Icon icon="vtex" />
        </div>
        <div className={`${styles.icon} ${styles.cruce}`}>
          <Icon icon="cruce" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
