import React from "react";

//components
import Alert from "../alert/Alert";
import Home from "./home/Home";
import Popup from "../popup/Popup";
import BtnWhatsapp from "../buttons/whatsapp/BtnWhatsapp";

//styles
import styles from "./main.module.scss";

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
