import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery, your one-stop destination for beautiful
        indoor plants.
      </p>

      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;