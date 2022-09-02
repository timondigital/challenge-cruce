import React from "react";
import { Link } from "react-router-dom";

//components
import Filter from "../filter/Filter";
import SortBy from "../sortBy/SortBy";
import CardProductHorizontal from "../products/cardProductHorizontal/CardProductHorizontal";
import BtnUp from "../buttons/btnUp/BtnUp";
//images
import funkoCollection from "../../img/products/banner_listadocollection.png";
import producto from "../../img/products/product1.png";

//styles
import styles from "./productSection.module.scss";

const ProductsSection = () => {
  return (
    <div className={styles.content}>
      <div className={styles.rutes}>
        Inicio / Juguetes / <strong>Funko Pop</strong>
      </div>
      <Filter />
      <SortBy />
      <div className={styles.bannerFunko}>
        <img
          className={styles.imgFunkoCollection}
          src={funkoCollection}
          alt=" Colección Funko"
        />
      </div>
      <div className={styles.contentProducts}>
        <CardProductHorizontal
          className={styles.cardProductHorizontal}
          classNameImg={styles.img}
          description="Funko POP | Game Of Thrones - Daenerys 25"
          img={producto}
          off={true}
        />
        <CardProductHorizontal
          className={styles.cardProductHorizontal}
          classNameImg={styles.img}
          description="Funko POP | Game Of Thrones - Daenerys 25"
          img={producto}
          off={false}
        />
        <CardProductHorizontal
          className={styles.cardProductHorizontal}
          classNameImg={styles.img}
          description="Funko POP | Game Of Thrones - Daenerys 25"
          img={producto}
          off={false}
        />
        <CardProductHorizontal
          className={styles.cardProductHorizontal}
          classNameImg={styles.img}
          description="Funko POP | Game Of Thrones - Daenerys 25"
          img={producto}
          off={false}
        />{" "}
        <CardProductHorizontal
          className={styles.cardProductHorizontal}
          classNameImg={styles.img}
          description="Funko POP | Game Of Thrones - Daenerys 25"
          img={producto}
          off={true}
        />
        <CardProductHorizontal
          className={styles.cardProductHorizontal}
          classNameImg={styles.img}
          description="Funko POP | Game Of Thrones - Daenerys 25"
          img={producto}
          off={false}
        />
        <CardProductHorizontal
          className={styles.cardProductHorizontal}
          classNameImg={styles.img}
          description="Funko POP | Game Of Thrones - Daenerys 25"
          img={producto}
          off={true}
        />
        <CardProductHorizontal
          className={styles.cardProductHorizontal}
          classNameImg={styles.img}
          description="Funko POP | Game Of Thrones - Daenerys 25"
          img={producto}
          off={false}
        />
      </div>
      <BtnUp className={styles.btnUp} />
    </div>
  );
};

export default ProductsSection;
