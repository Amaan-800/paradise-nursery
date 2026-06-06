import { Link } from "react-router-dom";

function LandingPage() {
return ( <div className="landing-page"> <div className="overlay"> <h1 className="hero-title">🌿 Paradise Nursery</h1>

```
    <p className="hero-text">
      Discover beautiful indoor plants that bring freshness,
      peace, and natural beauty into your home and workspace.
    </p>

    <Link to="/products">
      <button className="hero-btn">Explore Plants</button>
    </Link>
  </div>
</div>

);
}

export default LandingPage;
