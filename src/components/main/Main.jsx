import React from "react";
import Alert from "../alert/Alert";
import Home from "./home/Home";

//styles
import styles from "./main.module.scss";

const Main = () => {
  return (
    <div>
      <Alert />
      <Home />
    </div>
  );
};

export default Main;
