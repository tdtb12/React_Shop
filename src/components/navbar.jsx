import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomePage from "./homepage";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/React_Shop" className="navbar-brand">
          Logo
        </Link>
      </nav>
    );
  }
}

export default Navbar;
