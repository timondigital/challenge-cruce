import React from "react";

//components
import CardMostWanted from "../mostWanted/CardMostWanted";

//images
import product1 from "../../img/products/dinno1.png";
import product2 from "../../img/products/dinno2.png";

//styles
import styles from "./endIn.module.scss";

const EndIn = () => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2 className={`${styles.title} title`}> Termina en</h2>
        <div className={styles.time}>23:03:04</div>
        <div className={styles.timeLegend}>
          <div>HS</div>
          <div>min</div>
          <div>seg</div>
        </div>
      </div>

      <CardMostWanted
        product={product1}
        text={"Dinosaurio robot para armar"}
        price={1350}
        offerPrice={"2580"}
        off={true}
        className={styles.cardMostWanted}
      />
      <CardMostWanted
        product={product1}
        text={"Dinosaurio robot para armar"}
        price={1350}
        offerPrice={"2580"}
        off={true}
        className={styles.cardMostWanted}
      />
      <CardMostWanted
        product={product2}
        text={"Mochila de ToyStory Dinosaurio REX"}
        price={1350}
        offerPrice={"2580"}
        off={false}
        className={styles.cardMostWanted}
      />

      <CardMostWanted
        product={product2}
        text={"Mochila de ToyStory Dinosaurio REX"}
        price={1350}
        offerPrice={"2580"}
        off={false}
        className={styles.cardMostWanted}
      />
      <CardMostWanted
        product={product1}
        text={"Dinosaurio robot para armar"}
        price={1350}
        offerPrice={"2580"}
        off={true}
        className={styles.cardMostWanted}
      />
    </div>
  );
};

export default EndIn;
