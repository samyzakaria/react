
import React from "react";
import {Link ,NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <div className="navbar">
      <div className="container">
        <a className="logo" href="#">
          Logo
        </a>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
