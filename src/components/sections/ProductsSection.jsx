import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDetectedScreen from "../../hooks/useDetectedScreen.js";
import products from "../../asset/constant/product.json";

//components
import Filter from "../filter/Filter";
import SortBy from "../sortBy/SortBy";
import CardProductHorizontal from "../products/cardProductHorizontal/CardProductHorizontal";
import BtnUp from "../buttons/btnUp/BtnUp";
import BtnPagination from "../buttons/btnPagination/BtnPagination";
import CardProduct from "../products/cardProduct/CardProduct.jsx";

//images
import funkoCollection from "../../img/products/banner_listadocollection.png";

//styles
import styles from "./productsSection.module.scss";

const productImg = require.context("../../img/products", true);

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
            {products.map((product) =>
              product.brand === "Funco" ? (
                <CardProductHorizontal
                  className={styles.cardProductHorizontal}
                  classNameImg={styles.img}
                  description={product.description}
                  img={productImg(product.img)}
                  off={product.off}
                  price={product.price}
                  priceOffer={product.priceOffer}
                  brand={product.brand}
                  inStock={product.inStock}
                />
              ) : (
                <></>
              )
            )}
          </>
        ) : (
          <>
            {products.map((product) =>
              product.brand === "Funco" ? (
                <CardProduct
                  className={styles.cardProduct}
                  classNameImg={styles.img}
                  description={product.description}
                  img={productImg(product.img)}
                  off={product.off}
                  price={product.price}
                  priceOffer={product.priceOffer}
                  brand={product.brand}
                  inStock={product.inStock}
                />
              ) : (
                <></>
              )
            )}
          </>
        )}
      </div>
      <BtnPagination className={styles.btnPagination} />
      <BtnUp className={styles.btnUp} />
    </div>
  );
};

export default ProductsSection;
