import React, { useEffect, useState } from "react";
import useDetectedScreen from "../../hooks/useDetectedScreen.js";

import { Link } from "react-router-dom";

//components
import Filter from "../filter/Filter";
import SortBy from "../sortBy/SortBy";
import CardProductHorizontal from "../products/cardProductHorizontal/CardProductHorizontal";
import BtnUp from "../buttons/btnUp/BtnUp";
import BtnPagination from "../buttons/btnPagination/BtnPagination";
//images
import funkoCollection from "../../img/products/banner_listadocollection.png";
import producto from "../../img/products/product1.png";

//styles
import styles from "./productSection.module.scss";
import CardProduct from "../products/cardProduct/CardProduct.jsx";

const ProductsSection = () => {
  const sizeScreen = useDetectedScreen();
  const [typeScreen, setTypeScreen] = useState(sizeScreen);

  useEffect(() => {
    setTypeScreen(sizeScreen);
  }, [sizeScreen]);

  return (
    <div className={styles.content}>
      <div className={styles.routes}>
        <Link to="/" className={styles.route}>
          Inicio
        </Link>
        <div className={styles.route}>/</div>
        <Link to="/" className={styles.route}>
          Juguetes
        </Link>
        <div className={styles.route}>/</div>
        <Link to="/productsSections" className={styles.route}>
          Funko Pop
        </Link>
      </div>
      <Filter />
      <SortBy />
      <div className={styles.bannerFunko} id="inicio">
        <img
          className={styles.imgFunkoCollection}
          src={funkoCollection}
          alt=" Colección Funko"
        />
      </div>
      <div className={styles.contentProducts}>
        {typeScreen !== "desktop" ? (
          <>
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
          </>
        ) : (
          <>
            <CardProduct
              className={styles.cardProduct}
              classNameImg={styles.img}
              description="Funko POP | Game Of Thrones - Daenerys 25"
              img={producto}
              off={true}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameImg={styles.img}
              description="Funko POP | Game Of Thrones - Daenerys 25"
              img={producto}
              off={false}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameImg={styles.img}
              description="Funko POP | Game Of Thrones - Daenerys 25"
              img={producto}
              off={false}
              inStock={false}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameImg={styles.img}
              description="Funko POP | Game Of Thrones - Daenerys 25"
              img={producto}
              off={true}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameImg={styles.img}
              description="Funko POP | Game Of Thrones - Daenerys 25"
              img={producto}
              off={false}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameImg={styles.img}
              description="Funko POP | Game Of Thrones - Daenerys 25"
              img={producto}
              off={false}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameImg={styles.img}
              description="Funko POP | Game Of Thrones - Daenerys 25"
              img={producto}
              off={true}
            />
            <CardProduct
              className={styles.cardProduct}
              classNameImg={styles.img}
              description="Funko POP | Game Of Thrones - Daenerys 25"
              img={producto}
              off={true}
            />
          </>
        )}
      </div>
      <BtnPagination className={styles.btnPagination} />
      <BtnUp className={styles.btnUp} />
    </div>
  );
};

export default ProductsSection;
