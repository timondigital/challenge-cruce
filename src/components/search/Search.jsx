import React from "react";
import Icon from "../icon/Icon";

//styles
import styles from "./search.module.scss";

const Search = () => {
  return (
    <div>
      <Icon icon="search" className={styles.searchIcon} />
      <input type="text" placeholder="¿Qué esás buscando?"></input>
    </div>
  );
};

export default Search;
