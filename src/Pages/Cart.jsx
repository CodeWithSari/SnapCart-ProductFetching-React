import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { removeFromCart } from "../redux/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
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

                    <button
                      className="btn btn-outline-danger mt-3"
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                    >
                      <FaTrash /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-end mt-4">
            Total:{" "}
            <span className="text-success">
              ₹ {totalPrice}
            </span>
          </h4>

          <div className="text-end mt-3">
            <button className="btn btn-success px-4">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
