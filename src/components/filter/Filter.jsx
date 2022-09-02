import React from "react";
import Icon from "../icon/Icon";

//styles
import styles from "./filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <Icon icon="star-full" className={styles.filterIcon} />
      <input type="text" placeholder="Filtrar" className={styles.filterInput} />
      <Icon icon="right" className={styles.arrowIcon} />
    </div>
  );
};

export default Filter;
