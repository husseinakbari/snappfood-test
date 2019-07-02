import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-page">
      <div className="container">
        <div className="logo">
          <Link to="/">Snapp</Link>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
