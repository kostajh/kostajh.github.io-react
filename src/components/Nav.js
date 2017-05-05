import React from 'react';
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <nav className="pa3 pa4-ns">
      <li>
        <NavLink className="link dim gray f6 f5-ns dib m43" exact activeClassName="link dim gray f6 f5-ns dib m43 black b" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="link dim gray f6 f5-ns dib m43" activeClassName="link dim gray f6 f5-ns dib m43 black b" to="/about">
          About / CV
        </NavLink>
      </li>
    </nav>
  );
}

module.exports = Nav;
