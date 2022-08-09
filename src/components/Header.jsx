import React, { useState } from "react";

//icons

//styles
import "./header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="header">
      <nav>
        {showMenu ? (
          <div>
            <img
              style={{ fill: "blue" }}
              src="#"
              alt="menu"
              onClick={handleShowMenu}
            />
          </div>
        ) : (
          <div onClick={handleShowMenu}>show</div>
        )}
      </nav>
      <img src="#" alt="logo cruce " />
      <div className="shop">shop</div>
    </header>
  );
};

export default Header;
