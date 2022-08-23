import React from "react";

import BtnUp from "../buttons/btnUp/BtnUp";
import Btn from "../buttons/Btn";
import Icon from "../icon/Icon";

import cace from "../../img/brands/cace.png";
import ahora18 from "../../img/brands/ahora18.png";
import hotSale from "../../img/brands/hotsaele.png";
import afip from "../../img/brands/afip.png";
import vtex from "../../img/brands/afip.png";
import cruce from "../../img/brands/afip.png";

import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footerContent}>
      <div className={styles.contentBtnUp}>
        <BtnUp />
      </div>

      <div className={styles.contactContent}>
        <div className={styles.text}>
          <div className={styles.text}>Contacto</div>
          <div className={styles.subText}>MAYORISTAS</div>
        </div>
        <div className={styles.form}>
          <label for="email">¿BUSCÁS OFERTAS?</label>
          <input type="email" name="email" id="email" placeholder="eMail" />
          {/* <input type="submit" name="send" id="send" value="ENVIAR" /> */}

          <Btn text="ENVIAR" className={styles.btnSend} />
        </div>
      </div>

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
      <div className={styles.contentNavFooter}>
        <div className={styles.sections}>PREGUNTAS FREC.</div>
        <div className={styles.sections}>TÉRM & COND</div>
        <div className={styles.sections}>MIS PEDIDOS</div>
      </div>
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
          <div className={styles.icon}>
            <img src={afip} alt="icono" />
          </div>
          <div className={styles.icon}>
            <Icon icon="vtex" />
          </div>
          <div className={styles.icon}>
            <Icon icon="cruce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
