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

return ( <div> <Navbar />

```
  <div className="cart-container">
    <h1 className="cart-title">
      🛒 Shopping Cart
    </h1>

    <div className="cart-summary">
      <h2>Total Amount: ${total}</h2>

      <div className="cart-actions">
        <Link to="/products">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>

        <button
          className="checkout-btn"
          onClick={() =>
            alert("Checkout Coming Soon!")
          }
        >
          Checkout
        </button>
      </div>
    </div>

    {items.length === 0 ? (
      <h2 className="empty-cart">
        Your cart is empty 🌿
      </h2>
    ) : (
      items.map((item) => (
        <div
          key={item.id}
          className="cart-card"
        >
          <div>
            <h3>{item.name}</h3>

            <p>
              Price: ${item.price}
            </p>

            <p>
              Quantity: {item.quantity}
            </p>

            <p>
              Total: $
              {item.price *
                item.quantity}
            </p>
          </div>

          <div className="cart-buttons">
            <button
              onClick={() =>
                dispatch(
                  increaseQuantity(item.id)
                )
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch(
                  decreaseQuantity(item.id)
                )
              }
            >
              -
            </button>

            <button
              className="remove-btn"
              onClick={() =>
                dispatch(
                  removeItem(item.id)
                )
              }
            >
              Remove
            </button>
          </div>
        </div>
      ))
    )}
  </div>
</div>

);
}

export default CartItem;
