import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { logout } from "../../actions/auth";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark elegant-color-dark sticky-top">
      <Link to="/" className="navbar-brand">
        CraftGuild
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-right">
          <li>
            <Link to="/signin" className="nav-link">
              Sign In/Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
