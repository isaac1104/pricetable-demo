import React from "react";

const NavMenu = ({ item }) => {
  return (
    <a href="#" className="nav-link">
      {item.toUpperCase()}
    </a>
  );
}

export default NavMenu;
