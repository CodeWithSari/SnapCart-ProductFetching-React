import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">❤️ Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-muted">
          Your wishlist is empty
        </p>
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

                  <p className="fw-bold text-success mt-auto">
                    ₹ {item.price}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-1">
                    <span className="badge bg-secondary">
                      {item.category}
                    </span>
                    <span className="text-warning">
                      ⭐ {item.rating}
                    </span>
                  </div>

                  <div className="d-flex gap-2 mt-3">
                    <button
                      className="btn btn-primary w-50"
                      onClick={() =>
                        dispatch(addToCart(item))
                      }
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
  );
}

export default Wishlist;
