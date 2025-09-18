import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(90deg, peachpuff, #4B0082)", // peach → violet gradient
      }}
    >
      <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand
            style={{ color: "#4B0082", fontWeight: "bold", fontSize: "1.3rem" }}
          >
            SnapCart
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#cb8ff5ff" }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link" style={{ color: "#f66aabff", fontWeight: "500" }}>
              Home
            </Link>
            <Link to="/about" className="nav-link" style={{ color: "#f66aabff", fontWeight: "500" }}>
              About
            </Link>
            <Link to="/contact" className="nav-link" style={{ color: "#f66aabff", fontWeight: "500" }}>
              Contact
            </Link>
            <Link to="/products" className="nav-link" style={{ color: "#f66aabff", fontWeight: "500" }}>
              Products
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;