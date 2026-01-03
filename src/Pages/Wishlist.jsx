import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaTrash,
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaRupeeSign
} from "react-icons/fa";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

function Wishlist() {
  const dispatch = useDispatch();

  // Wishlist is an array in Redux
  const wishlistItems = useSelector((state) => state.wishlist);

  return (
    <>
      {/* Internal CSS for animation */}
      <style>
        {`
          .wishlist-title {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            color: #dc3545;
          }

          .heart-animate {
            animation: heartbeat 1.5s infinite;
          }

          .empty-wishlist {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            text-align: center;
            color: #dc3545;
          }

          .empty-heart {
            font-size: 80px;
            margin-bottom: 15px;
          }

          @keyframes heartbeat {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      <div className="container my-5">
        {/* Title */}
        <h2 className="text-center mb-4 wishlist-title">
          <FaHeart className="heart-animate" />
          Your Wishlist
        </h2>

        {/* Empty State */}
        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <FaHeart className="heart-animate empty-heart" />
            <h4>Your wishlist is empty</h4>
            <p className="text-muted">
              Add items you love to your wishlist
            </p>
          </div>
        ) : (
          <div className="row">
            {wishlistItems.map((item) => (
              <div className="col-md-3 mb-4" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>

                    {/* Price */}
                    <p className="fw-bold text-success mt-auto">
                      <FaRupeeSign /> {item.price}
                    </p>

                    <div className="d-flex justify-content-between align-items-center mt-1">
                      <span className="badge bg-secondary">
                        {item.category}
                      </span>
                      <span className="text-warning">
                        <FaStar /> {item.rating}
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="d-flex gap-2 mt-3">
                      <button
                        className="btn btn-primary w-50"
                        onClick={() => {
                          dispatch(addToCart(item));
                          dispatch(removeFromWishlist(item.id));
                        }}
                      >
                        <FaShoppingCart /> Cart
                      </button>

                      <button
                        className="btn btn-outline-danger w-50"
                        onClick={() =>
                          dispatch(removeFromWishlist(item.id))
                        }
                      >
                        <FaTrash />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Wishlist;
