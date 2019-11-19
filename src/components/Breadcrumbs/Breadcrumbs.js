import React from "react";
import "./Breadcrumbs.css";
import { Link } from "react-router-dom";
function Breadcrumbs() {
  return (
    <div className="breadcrumbs">
      <div className="home-wrap">
        <a href="/" className="home-link">
          <i class="fas fa-paw"></i>
        </a>
      </div>
      <a href="/" className="home-link">
        {" "}
        > <span> Search</span>
      </a>
    </div>
  );
}

export default Breadcrumbs;
