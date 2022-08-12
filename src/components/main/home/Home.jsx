import React from "react";
import Search from "../../search/Search";

import CardProduct from "../../products/CardProduct";
import Btn from "../../buttons/Btn";

//styles
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Search />
      <h3 className={styles.title}>
        Llegó el invierno, encontralo antes que nadie{" "}
      </h3>
      <div className={styles.contentCardsProduct}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <Btn text="Ver colección" />
    </div>
  );
};

export default Home;
