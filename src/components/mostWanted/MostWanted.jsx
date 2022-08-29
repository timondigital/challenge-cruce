import React from "react";
import product1 from "../../img/products/dinno1.png";
import product2 from "../../img/products/dinno2.png";
import CardMostWanted from "./CardMostWanted";

import styles from "./mostWanted.module.scss";

const MostWanted = () => {
  return (
    <div className={styles.content}>
      <h2 className={`${styles.title} title`}>Lo más buscado</h2>

      <CardMostWanted product={product1} text={"Dinosaurio robot para armar"} />
      <CardMostWanted product={product1} text={"Dinosaurio robot para armar"} />
      <CardMostWanted
        product={product2}
        text={"Mochila de ToyStory Dinosaurio REX"}
      />

      <CardMostWanted
        product={product2}
        text={"Mochila de ToyStory Dinosaurio REX"}
      />
      <CardMostWanted product={product1} text={"Dinosaurio robot para armar"} />
    </div>
  );
};

export default MostWanted;
