import React from "react";
import Search from "../../search/Search";

//styles
import styles from "./home.module.scss";
import Products from "../../products/Products";
import Brands from "../../brands/Brands";

const Home = () => {
  return (
    <div className={styles.home}>
      <Search />
      <Products />
      <Brands />
    </div>
  );
};

export default Home;
