import React from "react";
import { Link } from "react-router-dom";

const NavMenu = ({ item }) => {
  return (
    <Link to={`/${item}`} className="nav-link">
      {item.toUpperCase()}
    </Link>
  );
}

export default NavMenu;
