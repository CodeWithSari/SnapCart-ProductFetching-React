import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash, FaShoppingCart, FaRupeeSign, FaStar  } from "react-icons/fa";
import { BsCartX, BsCartCheck } from "react-icons/bs";
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
      <h2 className="text-center mb-4">
        <FaShoppingCart className="me-2 text-success" />
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-muted mt-5">
          <BsCartX size={60} className="mb-3" />
          <p>Your cart is empty</p>
        </div>
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
                      <FaRupeeSign className="me-1" />
                      {item.price}
                    </p>

                    <div className="d-flex justify-content-between align-items-center mt-1">
                      <span className="badge bg-secondary">
                        {item.category}
                      </span>
                      <span className="text-warning">
                      <FaStar className="me-1" />
                      {item.rating}
                      </span>

                    </div>

                    <button
                      className="btn btn-outline-danger mt-3"
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                    >
                      <FaTrash className="me-2" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-end mt-4">
            Total:{" "}
            <span className="text-success">
              <FaRupeeSign className="me-1" />
              {totalPrice}
            </span>
          </h4>

          <div className="text-end mt-3">
            <button className="btn btn-success px-4">
              <BsCartCheck className="me-2" />
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
