import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import React from "react";

export const NavbarM = () => {
  return (
    <div className="navbar-main">
      <Navbar  bg="light" expand="lg">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Featured Collection</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">Sale!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ShoppingCartOutlinedIcon />
      </Navbar>
    </div>
  );
};
