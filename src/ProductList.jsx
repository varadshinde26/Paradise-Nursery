import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  // Air Purifying Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb3",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 20,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 22,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8c7a1b1",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 35,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 40,
    category: "Air Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1525490829609-d166ddb58678",
  },

  // Aromatic Plants
  {
    id: 7,
    name: "Lavender",
    price: 18,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
  },
  {
    id: 8,
    name: "Rosemary",
    price: 16,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1515586000433-45406d8e6662",
  },
  {
    id: 9,
    name: "Mint",
    price: 12,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1628557044797-f21a177c37ec",
  },
  {
    id: 10,
    name: "Basil",
    price: 14,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1618375569909-3c8616cf7733",
  },
  {
    id: 11,
    name: "Jasmine",
    price: 24,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1597848212624-e19c3f4d5fbd",
  },
  {
    id: 12,
    name: "Lemongrass",
    price: 15,
    category: "Aromatic Plants",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
  },

  // Medicinal Plants
  {
    id: 13,
    name: "Tulsi",
    price: 15,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1604848698030-c434ba08ece1",
  },
  {
    id: 14,
    name: "Ginger Plant",
    price: 20,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7",
  },
  {
    id: 15,
    name: "Turmeric Plant",
    price: 21,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5",
  },
  {
    id: 16,
    name: "Neem",
    price: 28,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1603905179139-db12ab535e6d",
  },
  {
    id: 17,
    name: "Chamomile",
    price: 19,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
  },
  {
    id: 18,
    name: "Eucalyptus",
    price: 32,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Air Purifying Plants",
    "Aromatic Plants",
    "Medicinal Plants",
  ];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Paradise Nursery</Link>
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </nav>

      {/* Product Listing */}
      <main className="product-container">
        <h1>Paradise Nursery Plants</h1>

        <p className="product-intro">
          Explore our collection of beautiful and healthy plants for
          your home and office.
        </p>

        {categories.map((category) => {
          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section
              className="plant-category"
              key={category}
            >
              <h2>{category}</h2>

              <div className="plant-grid">
                {categoryPlants.map((plant) => (
                  <div className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <div className="plant-info">
                      <h3>{plant.name}</h3>

                      <p className="plant-price">
                        ${plant.price}
                      </p>

                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;
