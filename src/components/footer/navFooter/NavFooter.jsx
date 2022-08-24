import React from "react";
import styles from "./navFooter.module.scss";

const NavFooter = () => {
  return (
    <div className={styles.contentNavFooter}>
      <div className={styles.sections}>PREGUNTAS FREC.</div>
      <div className={styles.sections}>TÉRM & COND</div>
      <div className={styles.sections}>MIS PEDIDOS</div>
    </div>
  );
};

export default NavFooter;
