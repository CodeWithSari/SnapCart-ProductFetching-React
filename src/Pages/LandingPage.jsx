import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

function LandingPage() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/closeup-colorful-gift-boxes-trolley_181624-42899.jpg?semt=ais_hybrid&w=740&q=80')",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        
      }}
    >
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="p-5 rounded shadow"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)", // More opaque for better readability
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <h1 className="mb-4 fw-bold display-4" style={{ color: "#58056dff" }}>
                SnapCart
              </h1>
              <p className="lead mb-4 fs-5" style={{ color: "#f5f5f6ff" }}>
                Quick picks. Daily deals. Shop in a snap..!!
              </p>
              <Link
                to="/products"
                className="btn btn-lg mt-3 px-5 py-3 fw-bold"
                style={{
                  backgroundColor: "#9439f0ff",
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 6px rgba(74, 144, 226, 0.3)"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#4f0d91ff";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 12px rgba(74, 144, 226, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#b222c8ff";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px rgba(74, 144, 226, 0.3)";
                }}
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
              <div className="card-body text-center p-4">
                <div className="mb-3" style={{ color: "#4A90E2", fontSize: "2.5rem" }}>
                  <i className="fas fa-tags"></i>
                </div>
                <h5 className="card-title fw-bold" style={{ color: "#2D3748" }}>Best Deals</h5>
                <p className="card-text" style={{ color: "#4A5568" }}>
                  Find exclusive discounts and special offers on premium products.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
              <div className="card-body text-center p-4">
                <div className="mb-3" style={{ color: "#4A90E2", fontSize: "2.5rem" }}>
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <h5 className="card-title fw-bold" style={{ color: "#2D3748" }}>Fast Shipping</h5>
                <p className="card-text" style={{ color: "#4A5568" }}>
                  Get your orders delivered quickly with our premium shipping partners.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
              <div className="card-body text-center p-4">
                <div className="mb-3" style={{ color: "#4A90E2", fontSize: "2.5rem" }}>
                  <i className="fas fa-headset"></i>
                </div>
                <h5 className="card-title fw-bold" style={{ color: "#2D3748" }}>24/7 Support</h5>
                <p className="card-text" style={{ color: "#4A5568" }}>
                  Our customer service team is always ready to assist you with any queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Contact/>
    </div>
  );
}

export default LandingPage;