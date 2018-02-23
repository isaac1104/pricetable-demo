import React, { Component } from "react";
import NavMenu from "./NavMenu";

class Navbar extends Component {

  renderNavMenu = () => {
    const items = ["home", "about", "products", "contact"];
    return items.map(item => {
      return (
        <li className="nav-item" key={item}>
          <NavMenu item={item}/>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">Our Website</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto">
              {this.renderNavMenu()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
