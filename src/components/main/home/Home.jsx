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
import Campaign from "../../campaign/Campaign";
import EndIn from "../../endsIn/EndIn";
import Recommended from "../../recommended/Recommended";

const Home = () => {
  const screenWidth = window.screen.width;
  const whidtTablet = 768;
  console.log(screenWidth >= whidtTablet);

  return (
    <div className={styles.home}>
      <Search />
      {screenWidth >= whidtTablet ? <InfoSlide /> : null}
      <Products />
      <Brands />
      {screenWidth >= whidtTablet ? null : <InfoSlide />}
      <ToyOfDay />
      <MostWanted />
      <News />
      <Campaign />
      <EndIn />
      <Recommended />
    </div>
  );
};

export default Home;
