import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <a className="nav-li" href="/">
          Home
        </a>
        <a className="nav-li" href="/search">
          Search
        </a>
        <a className="nav-li" href="/">
          Logout
        </a>
      </ul>
    </nav>
  );
}

export default Navigation;
