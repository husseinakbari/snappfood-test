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
          <h5>Hossein Akbari</h5>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
