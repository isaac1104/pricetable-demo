import React from "react";

const NavMenu = ({ item }) => {
  return (
    <a href={`/${item}`} className="nav-link">
      {item.toUpperCase()}
    </a>
  );
}

export default NavMenu;
