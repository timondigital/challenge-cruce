import React from "react";

//components
import CardProduct from "./cardProduct/CardProduct";
import Btn from "../buttons/Btn";

//images
import products from "../../asset/constant/product.json";
import product1 from "../../img/products/product1.png";
import product2 from "../../img/products/product2.png";
import product3 from "../../img/products/product3.png";
import product4 from "../../img/products/product4.png";
import product5 from "../../img/products/product5.png";
import product6 from "../../img/products/product6.png";

//styles
import styles from "./products.module.scss";

const Products = () => {
  return (
    <>
      <div className={styles.contentCardsProduct}>
        <h3 className={`${styles.title} title`} id="inicio">
          Llegó el invierno, encontralo antes que nadie
        </h3>
        <p>La colección más completa de Game of Thrones está en X</p>
        <Btn className={styles.btnBotton} text="Ver colección" />
        {/* no alcance a resolver como hacer clases dinamicas al usar estilos module para poder usar map()... una pena...  */}
        <CardProduct
          className={`${styles.product} ${styles.num1}`}
          img={product1}
          description={products[0].description}
          off={products[0].off}
          price={products[0].price}
          priceOffer={products[0].priceOffer}
          brand={products[0].brand}
          inStock={products[0].inStock}
        />
        <CardProduct
          className={`${styles.product} ${styles.num2}`}
          img={product2}
          description={products[1].description}
          off={products[1].off}
          price={products[1].price}
          priceOffer={products[1].priceOffer}
          brand={products[1].brand}
          inStock={products[1].inStock}
        />
        <CardProduct
          className={`${styles.product} ${styles.num3}`}
          img={product3}
          description={products[2].description}
          off={products[2].off}
          price={products[2].price}
          priceOffer={products[2].priceOffer}
          brand={products[2].brand}
          inStock={products[2].inStock}
        />
        <CardProduct
          className={`${styles.product} ${styles.num4}`}
          img={product4}
          description={products[3].description}
          off={products[3].off}
          price={products[3].price}
          priceOffer={products[3].priceOffer}
          brand={products[3].brand}
          inStock={products[3].inStock}
        />
        <CardProduct
          className={`${styles.product} ${styles.num5}`}
          img={product5}
          description={products[4].description}
          off={products[4].off}
          price={products[4].price}
          priceOffer={products[4].priceOffer}
          brand={products[4].brand}
          inStock={products[4].inStock}
        />
        <CardProduct
          className={`${styles.product} ${styles.num6}`}
          img={product6}
          description={products[5].description}
          off={products[5].off}
          price={products[5].price}
          priceOffer={products[5].priceOffer}
          brand={products[5].brand}
          inStock={products[5].inStock}
        />
      </div>
    </>
  );
};

export default Products;
