import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./style.css";
// import logo from "../../assets/logo.webp";
// import Image from "react-bootstrap/Image";

const MainNav = () => {
  return (
    <Nav className="mr-auto">
      <Nav.Link
        as={RouterNavLink}
        to="/"
        exact
        activeClassName="router-link-exact-active"
        style={{ color: "white" }}
      >
        {/* <Image
          className="logo"
          src={logo}
          // style={{ height: "auto", width: "20%" }}
        /> */}
      </Nav.Link>

      <Nav.Link
        as={RouterNavLink}
        to="/"
        exact
        activeClassName="router-link-exact-active"
        style={{ color: "white" }}
      >
        Home
      </Nav.Link>

      <Nav.Link
        as={RouterNavLink}
        to="/dashboard"
        exact
        activeClassName="router-link-exact-active"
        style={{ color: "white" }}
      >
        Dashboard
      </Nav.Link>
    </Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="md" sticky="top" opacity="60">
      <Navbar.Brand as={RouterNavLink} /*className="logo"*/ to="/" />
      <MainNav />
    </Navbar>
  );
};
export default NavBar;
