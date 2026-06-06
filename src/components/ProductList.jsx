import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

import snake from "../assets/snake.webp";
import spider from "../assets/spider.webp";
import aloe from "../assets/aloe.webp";
import jade from "../assets/jade.webp";
import lily from "../assets/lily.webp";
import orchid from "../assets/orchid.webp";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      price: 20,
      category: "Indoor Plants",
      image: snake,
    },
    {
      id: 2,
      name: "Spider Plant",
      price: 18,
      category: "Indoor Plants",
      image: spider,
    },
    {
      id: 3,
      name: "Aloe Vera",
      price: 15,
      category: "Succulents",
      image: aloe,
    },
    {
      id: 4,
      name: "Jade Plant",
      price: 22,
      category: "Succulents",
      image: jade,
    },
    {
      id: 5,
      name: "Peace Lily",
      price: 25,
      category: "Flowering Plants",
      image: lily,
    },
    {
      id: 6,
      name: "Orchid",
      price: 30,
      category: "Flowering Plants",
      image: orchid,
    },
  ];

  return (
    <div>
      <Navbar />

      <h1>Our Plants</h1>

      <Link to="/cart">
        <button>Go To Cart</button>
      </Link>

      {["Indoor Plants", "Succulents", "Flowering Plants"].map(
        (category) => (
          <div key={category}>
            <h2>{category}</h2>

            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const added = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      width="150"
                    />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      disabled={added}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {added ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        )
      )}
    </div>
  );
}

export default ProductList;