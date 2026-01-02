import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

export default function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  if (wishlistItems.length === 0) {
    return <h2>Your wishlist is empty ❤️</h2>;
  }

  return (
    <div>
      <h2>My Wishlist</h2>

      {wishlistItems.map((item) => (
        <div key={item.id} className="wishlist-item">
          <img src={item.image} width="80" />
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>

          <button
            onClick={() => dispatch(addToCart(item))}
          >
            Move to Cart
          </button>

          <button
            onClick={() => dispatch(removeFromWishlist(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
