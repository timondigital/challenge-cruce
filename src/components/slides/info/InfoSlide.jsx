import React from "react";
import Icon from "../../icon/Icon";
import styles from "./infoSlide.module.scss";
import BtnCircle from "../../buttons/btnCircle/BtnCircle";

const InfoSlide = () => {
  return (
    <>
      <div className={styles.contentInfo}>
        <div className={`${styles.contentBtnCircle}`}>
          <BtnCircle className={styles.left} icon="left" />
        </div>

        <div className={styles.slide}>
          <div className={styles.content}>
            <div className={styles.contentIcon}>
              <Icon className={styles.icon} icon="debit_card" />
            </div>
            <div className={styles.contentText}>
              <h3 className={styles.text}>12 y 18 Cuotas</h3>
              <h5 className={styles.subtext}>¡Sin interés !</h5>
            </div>
          </div>
          <div>
            <svg width="36" height="45" viewBox="0 0 45 30">
              <line
                x1="25"
                y1="0"
                x2="0"
                y2="40"
                className={styles.obliqueLine}
              />
            </svg>
          </div>
          <div className={styles.content}>
            <div className={styles.contentIcon}>
              <Icon className={styles.icon} icon="delivery_truck" />
            </div>
            <div className={styles.contentText}>
              <h3 className={styles.text}>Envío gratis</h3>
              <h5 className={styles.subtext}>En todas las compras</h5>
            </div>
          </div>
          <div>
            <svg width="36" height="45" viewBox="0 0 45 30">
              <line
                x1="25"
                y1="0"
                x2="0"
                y2="40"
                className={styles.obliqueLine}
              />
            </svg>
          </div>
          <div className={styles.content}>
            <div className={styles.contentIcon}>
              <Icon className={styles.icon} icon="delivery_moto" />
            </div>
            <div className={styles.contentText}>
              <h3 className={styles.text}>Te llega en 24hs</h3>
              <h5 className={styles.subtext}>Con costo adicional</h5>
            </div>
          </div>
        </div>
        <div className={`${styles.contentBtnCircle}`}>
          <BtnCircle icon="right" />
        </div>
      </div>
    </>
  );
};

export default InfoSlide;
