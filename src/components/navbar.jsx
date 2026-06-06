import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
const items = useSelector((state) => state.cart.items);

return ( <nav className="navbar"> <div className="logo">
🌿 Paradise Nursery </div>

```
  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/products">Plants</Link>
    <Link to="/cart">🛒 Cart ({items.length})</Link>
  </div>
</nav>

);
}

export default Navbar;
