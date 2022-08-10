import React, { useState } from "react";

//icons
import Icon from "../icon/Icon";

//components
import NavMobile from "../nav/NavMobile";

//styles
import "./header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="header">
      <nav onClick={handleShowMenu}>
        {showMenu ? <NavMobile /> : <div>show</div>}
      </nav>
      <Icon icon="cruce" className="cruceLogo" />
      <div className="shop">
        <Icon icon="shopping" className="shoppingIcon" />
        <div className="numProduct">3</div>
      </div>
    </header>
  );
};

export default Header;
