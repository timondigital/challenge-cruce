import React from "react";
import Btn from "../../buttons/Btn";
import styles from "./contact.module.scss";
const Contact = () => {
  return (
    <div className={styles.contactContent}>
      <div className={styles.text}>
        <div className={styles.text}>Contacto</div>
        <div className={styles.subText}>MAYORISTAS</div>
      </div>
      <div className={styles.form}>
        <label for="email">¿BUSCÁS OFERTAS?</label>
        <input type="email" name="email" id="email" placeholder="eMail" />
        <Btn text="ENVIAR" className={styles.btnSend} />
      </div>
    </div>
  );
};

export default Contact;
