import React from "react";
import Search from "../../search/Search";

//styles
import styles from "./home.module.scss";
import CardProduct from "../../products/CardProduct";

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
      </div>
    </div>
  );
};

export default Home;
