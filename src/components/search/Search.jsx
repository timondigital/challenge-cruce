import React from "react";
import Icon from "../icon/Icon";

//styles
import styles from "./search.module.scss";

const Search = () => {
  return (
    <div className={styles.search}>
      <Icon icon="search" className={styles.searchIcon} />
      <input
        type="text"
        placeholder="¿Qué estás buscando?"
        className={styles.searchInput}
      ></input>
    </div>
  );
};

export default Search;
