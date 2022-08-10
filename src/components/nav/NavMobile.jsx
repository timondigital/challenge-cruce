import React from "react";

import Icon from "../icon/Icon";

import styles from "./navMobile.module.scss";

const NavMobile = () => (
  <div className={styles.navMobile}>
    <Icon icon="menu" className={styles.burgerIcon} />
  </div>
);

export default NavMobile;
