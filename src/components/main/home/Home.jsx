import React from "react";
import Search from "../../search/Search";

//styles
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Search />
      <h3 className={styles.title}>
        Llegó el invierno, encontralo antes que nadie{" "}
      </h3>
    </div>
  );
};

export default Home;
