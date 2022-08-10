import React, { useState } from "react";

//icons
import Icon from "../icon/Icon";

//components
import NavMobile from "../nav/NavMobile";

//styles
import styles from "./header.module.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className={styles.header}>
      <nav onClick={handleShowMenu}>
        {showMenu ? <NavMobile /> : <div>show</div>}
      </nav>
      <Icon icon="cruce" className={styles.cruceLogo} />
      <div className={styles.shop}>
        <Icon icon="shopping" className={styles.shoppingIcon} />
        <div className={styles.numProduct}>3</div>
      </div>
    </header>
  );
};

export default Header;
