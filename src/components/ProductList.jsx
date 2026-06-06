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
description: "Air-purifying and extremely low maintenance."
},
{
id: 2,
name: "Spider Plant",
price: 18,
category: "Indoor Plants",
image: spider,
description: "Perfect for beginners and bright spaces."
},
{
id: 3,
name: "Aloe Vera",
price: 15,
category: "Succulents",
image: aloe,
description: "Medicinal plant with easy care needs."
},
{
id: 4,
name: "Jade Plant",
price: 22,
category: "Succulents",
image: jade,
description: "A symbol of prosperity and good luck."
},
{
id: 5,
name: "Peace Lily",
price: 25,
category: "Flowering Plants",
image: lily,
description: "Elegant blooms and excellent air purifier."
},
{
id: 6,
name: "Orchid",
price: 30,
category: "Flowering Plants",
image: orchid,
description: "Premium flowering plant with vibrant colors."
}
];

return ( <div> <Navbar />

```
  <div className="products-header">
    <h1>Our Premium Collection</h1>

    <Link to="/cart">
      <button className="cart-btn">
        🛒 View Cart ({cartItems.length})
      </button>
    </Link>
  </div>

  {["Indoor Plants", "Succulents", "Flowering Plants"].map(
    (category) => (
      <div className="category-section" key={category}>
        <h2 className="category-title">{category}</h2>

        <div className="plant-grid">
          {plants
            .filter((plant) => plant.category === category)
            .map((plant) => {
              const added = cartItems.some(
                (item) => item.id === plant.id
              );

              return (
                <div
                  key={plant.id}
                  className="plant-card"
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  <h3 className="plant-name">
                    {plant.name}
                  </h3>

                  <p className="plant-description">
                    {plant.description}
                  </p>

                  <p className="plant-price">
                    ${plant.price}
                  </p>

                  <button
                    className="add-btn"
                    disabled={added}
                    onClick={() =>
                      dispatch(addItem(plant))
                    }
                  >
                    {added ? "✓ Added" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    )
  )}
</div>

);
}

export default ProductList;
