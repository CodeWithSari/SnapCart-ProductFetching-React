import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

// Redux actions (adjust path if needed)
import { addToCart } from "../redux/slices/cartSlice";
import { addToWishlist } from "../redux/slices/wishlistSlice";

function Card({ product, showDescription = true }) {
  const dispatch = useDispatch();

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">

        {/* Product Image */}
        <Link to={`/viewproducts/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="card-img-top"
            style={{ height: "180px", objectFit: "cover" }}
          />
        </Link>

        {/* Card Body */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>

          {showDescription && (
            <p className="card-text text-truncate">
              {product.description}
            </p>
          )}

          <h6 className="fw-bold text-success mt-auto">
            ₹ {product.price}
          </h6>

          <div className="d-flex justify-content-between align-items-center mt-1">
            <span className="badge bg-secondary">{product.category}</span>
            <span className="text-warning">⭐ {product.rating}</span>
          </div>

          {/* 🔥 Action Buttons */}
          <div className="d-flex gap-2 mt-3">
            <button
              className="btn btn-outline-danger w-50"
              onClick={() => dispatch(addToWishlist(product))}
            >
              <FaHeart /> Wishlist
            </button>

            <button
              className="btn btn-primary w-50"
              onClick={() => dispatch(addToCart(product))}
            >
              <FaShoppingCart /> Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
