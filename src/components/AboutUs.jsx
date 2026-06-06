import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <Navbar />

      <div className="about-page">
        <div className="about-card">
          <h1>🌿 About Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your trusted destination for
            beautiful indoor plants and natural greenery.
          </p>

          <p>
            We believe every home deserves a touch of nature. Our carefully
            selected collection includes indoor plants, succulents, and
            flowering plants that enhance your living space while promoting
            health and well-being.
          </p>

          <p>
            Whether you are a beginner or an experienced plant enthusiast,
            Paradise Nursery offers high-quality plants that are easy to
            maintain and perfect for homes, offices, and workspaces.
          </p>

          <Link to="/products">
            <button className="hero-btn">
              Explore Our Collection
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutUs;