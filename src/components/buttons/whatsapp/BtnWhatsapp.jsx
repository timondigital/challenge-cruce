import React from "react";

import whatsappImg from "../../../img/brands/whatsapp_img.png";
import styles from "./btnWhatsapp.module.scss";
const BtnWhatsapp = () => {
  return (
    <div className={styles.content}>
      <img className={styles.img} src={whatsappImg} alt="whatsapp" />
    </div>
  );
};

export default BtnWhatsapp;
