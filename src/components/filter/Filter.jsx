import React, { useEffect, useState } from "react";
import useDetectedScreen from "../../hooks/useDetectedScreen.js";
import Icon from "../icon/Icon";

//styles
import styles from "./filter.module.scss";

const Filter = () => {
  const sizeScreen = useDetectedScreen();
  const [typeScreen, setTypeScreen] = useState(sizeScreen);

  const iconArrow = () => {
    switch (typeScreen) {
      case "phone":
        return (
          <>
            <Icon icon="right" className={styles.arrowIcon} />
          </>
        );
        break;
      case "tablet":
      case "desktop":
        return (
          <>
            <Icon icon="down" className={styles.arrowIcon} />
          </>
        );
        break;
      default:
        <></>;
    }
  };

  useEffect(() => {
    iconArrow();
    setTypeScreen(sizeScreen);
  }, [sizeScreen]);

  return (
    <div className={styles.filter}>
      <Icon icon="filter" className={styles.filterIcon} />
      <input type="text" placeholder="Filtrar" className={styles.filterInput} />
      {iconArrow()}
    </div>
  );
};

export default Filter;
