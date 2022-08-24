import React from "react";

import BtnUp from "../buttons/btnUp/BtnUp";

import styles from "./footer.module.scss";
import Contact from "./contact/Contact";
import Networks from "./networks/Networks";
import NavFooter from "./navFooter/NavFooter";
import Brands from "./brands/Brands";

const Footer = () => {
  return (
    <div className={styles.footerContent}>
      <div className={styles.contentBtnUp}>
        <BtnUp />
      </div>
      <Contact />
      <Networks />
      <NavFooter />
      <Brands />
    </div>
  );
};

export default Footer;
