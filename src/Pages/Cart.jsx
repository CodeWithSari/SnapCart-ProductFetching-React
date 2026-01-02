import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return <h2>Your cart is empty 🛒</h2>;
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div>
      <h2>My Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} width="80" />
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total Amount: ₹ {total.toFixed(2)}</h3>
    </div>
  );
}
