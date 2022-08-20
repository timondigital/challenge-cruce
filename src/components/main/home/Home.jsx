import React from "react";
import Search from "../../search/Search";

//styles
import styles from "./home.module.scss";
import Products from "../../products/Products";
import Brands from "../../brands/Brands";
import InfoSlide from "../../slides/info/InfoSlide";
import ToyOfDay from "../../toyOfDay/ToyOfDay";
import MostWanted from "../../mostWanted/MostWanted";
import News from "../../news/News";

const Home = () => {
  return (
    <div className={styles.home}>
      <Search />
      <Products />
      <Brands />
      <InfoSlide />
      <ToyOfDay />
      <MostWanted />
      <News />
    </div>
  );
};

export default Home;
