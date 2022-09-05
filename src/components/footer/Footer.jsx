import React from "react";

//components
import BtnUp from "../buttons/btnUp/BtnUp";
import Contact from "./contact/Contact";
import Networks from "./networks/Networks";
import NavFooter from "./navFooter/NavFooter";
import Brands from "./brands/Brands";

//styles
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContent}>
      <div className={styles.contentBtnUp}>
        <BtnUp />
      </div>
      <div className={styles.content}>
        <Contact className={styles.contact} />
        <Networks className={styles.networks} />
        <NavFooter className={styles.navFooter} />
      </div>
      <Brands />
    </div>
  );
};

export default Footer;
