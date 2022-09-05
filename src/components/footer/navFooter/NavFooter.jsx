import React from "react";

//styles
import styles from "./navFooter.module.scss";

const NavFooter = (props) => {
  return (
    <div className={`${styles.contentNavFooter} ${props.className}`}>
      <div className={styles.sections}>PREGUNTAS FREC.</div>
      <div className={styles.sections}>TÉRM & COND</div>
      <div className={styles.sections}>MIS PEDIDOS</div>
    </div>
  );
};

export default NavFooter;
