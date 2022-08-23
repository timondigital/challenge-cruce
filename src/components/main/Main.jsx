import React from "react";
import Alert from "../alert/Alert";
import Home from "./home/Home";

//styles
import styles from "./main.module.scss";
import Popup from "../popup/Popup";
import BtnWhatsapp from "../buttons/whatsapp/BtnWhatsapp";

const Main = () => {
  return (
    <main className={styles.main}>
      <Alert />
      <Popup />
      <BtnWhatsapp />
      <Home />
    </main>
  );
};

export default Main;
