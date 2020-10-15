import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="black lighten-1" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">
            Read Your Movie
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">Search</a>
            </li>
            <li>
              <a href="/library">Library</a>
            </li>
          </ul>
          <ul id="nav-mobile" className="sidenav">
            <li>
              <a href="/">Search</a>
            </li>
            <li>
              <a href="/library">Library</a>
            </li>
          </ul>

          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
