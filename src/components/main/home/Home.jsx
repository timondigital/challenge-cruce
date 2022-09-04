import React, { useState, useEffect } from "react";
import useDetectedScreen from "../../../hooks/useDetectedScreen.js";

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
  const sizeScreen = useDetectedScreen();
  const [typeScreen, setTypeScreen] = useState(sizeScreen);

  useEffect(() => {
    setTypeScreen(sizeScreen);
  }, [sizeScreen]);

  return (
    <div className={styles.home}>
      <Search />
      {typeScreen !== "phone" ? <InfoSlide /> : null}
      <Products />
      <Brands />
      {typeScreen !== "phone" ? null : <InfoSlide />}
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
