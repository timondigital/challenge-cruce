import React from "react";

//components
import Icon from "../icon/Icon";

//styles
import styles from "./sortBy.module.scss";

const SortBy = () => {
  return (
    <div className={styles.sortBy}>
      <input
        type="text"
        placeholder="Ordenar por"
        className={styles.sortByInput}
      />
      <Icon icon="down" className={styles.arrowIcon} />
    </div>
  );
};

export default SortBy;
