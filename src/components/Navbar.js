import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    const mystyle = {
      color: "white",

      fontSize: "25px",
      hover: {
        backgroundColor: "red",
      },
    };
    return (
      <>
        <div className="header">
          <div className="u-name">
            <span>magnox Private limited assignment by kuldeep yadav</span>
          </div>
          <Link to="/login">
            <span style={mystyle}>login</span>
          </Link>
          <Link to="/ragister">
            <span style={mystyle}>ragister</span>
          </Link>
        </div>
      </>
    );
  }
}

export default NavBar;
