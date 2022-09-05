import React from "react";

//components
import Icon from "../../icon/Icon";

//styles
import styles from "./btnNav.module.scss";

const BtnNav = (props) => (
  <div className={styles.btnNav}>
    <Icon icon={props.icon} className={styles.burgerIcon} />
  </div>
);

export default BtnNav;
