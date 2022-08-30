import React from "react";
import product1 from "../../img/products/dinno1.png";
import product2 from "../../img/products/dinno2.png";
import CardMostWanted from "./CardMostWanted";

import styles from "./mostWanted.module.scss";

const MostWanted = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentTitle}>
        <h2 className={`${styles.title} title`}>Lo más buscado</h2>
      </div>
      <CardMostWanted
        product={product1}
        text={"Dinosaurio robot para armar"}
        price={1350}
        offerPrice={"2580"}
        off={true}
      />
      <CardMostWanted
        product={product1}
        text={"Dinosaurio robot para armar"}
        price={1350}
        offerPrice={"2580"}
        off={true}
      />
      <CardMostWanted
        product={product2}
        text={"Mochila de ToyStory Dinosaurio REX"}
        price={1350}
        offerPrice={"2580"}
        off={false}
      />

      <CardMostWanted
        product={product2}
        text={"Mochila de ToyStory Dinosaurio REX"}
        price={1350}
        offerPrice={"2580"}
        off={false}
      />
      <CardMostWanted
        product={product1}
        text={"Dinosaurio robot para armar"}
        price={1350}
        offerPrice={"2580"}
        off={true}
      />
    </div>
  );
};

export default MostWanted;
