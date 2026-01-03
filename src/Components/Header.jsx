import React from 'react';
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

function Header() {
  const cartCount = useSelector((state) => state.cart.length);
  const wishlistCount = useSelector((state) => state.wishlist.length);

  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(90deg, peachpuff, #4B0082)",
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
          <Nav className="ms-auto align-items-center">
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

            {/* Wishlist */}
            <Link to="/wishlist" className="nav-link position-relative" style={{ color: "#f66aabff" }}>
              <FaHeart size={18} />
              {wishlistCount > 0 && (
                <Badge
                  bg="danger"
                  pill
                  style={{ position: "absolute", top: "0", right: "0" }}
                >
                  {wishlistCount}
                </Badge>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="nav-link position-relative" style={{ color: "#f66aabff" }}>
              <FaShoppingCart size={18} />
              {cartCount > 0 && (
                <Badge
                  bg="success"
                  pill
                  style={{ position: "absolute", top: "0", right: "0" }}
                >
                  {cartCount}
                </Badge>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
