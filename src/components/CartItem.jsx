import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity
} from "../redux/CartSlice";

function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />

      <h1>Shopping Cart</h1>

      <h2>Total: ${total}</h2>

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </button>

          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartItem;