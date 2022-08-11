import React from "react";
import Alert from "../alert/Alert";
import Home from "./home/Home";

//styles
import styles from "./main.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <Alert />
      <Home />
    </main>
  );
};

export default Main;
