import { useState } from "react";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  const product = {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    image: "https://m.media-amazon.com/images/I/51T-75FaWfL.jpg",
    size: "Medium",
    color: "Black/Gray",
    maxQuantity: 10,
    description:
      "Experience smooth navigation and ergonomic comfort with this wireless mouse, perfect for everyday use.",
  };

  // Get current stock left considering cart
  const existingItem = cart.find((item) => item.id === product.id);
  const currentInCart = existingItem ? existingItem.qty : 0;
  const availableStock = product.maxQuantity - currentInCart;

  // Handle Quantity (with max limit)
  const handleQuantity = (type) => {
    if (type === "inc" && quantity < availableStock) {
      setQuantity(quantity + 1);
    } else if (type === "dec" && quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // Add to Cart with max quantity check
  const addToCart = () => {
    if (quantity > availableStock) {
      alert(`Only ${availableStock} items left in stock.`);
      return;
    }

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: quantity }]);
    }
    setQuantity(0);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      {/* Product Card */}
      <div className="product-card">
        <div className="favorite">♡</div>
        <img src={product.image} alt={product.name} className="product-img" />
        <h2 className="product-title">{product.name}</h2>

        {/* Tags */}
        <div className="tags">
          <span className="tag">{product.size}</span>
          <span className="tag">{product.color}</span>
        </div>

        {/* Description */}
        <p className="description">{product.description}</p>

        {/* Stock Info */}
        <p>
          <b>Available:</b> {availableStock} left
        </p>

        {/* Price */}
        <p className="price">${product.price.toFixed(2)}</p>

        {/* Counter */}
        <div className="counter">
          <button onClick={() => handleQuantity("dec")} disabled={quantity === 0}>
            ➖
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleQuantity("inc")}
            disabled={quantity >= availableStock}
          >
            ➕
          </button>
        </div>

        {/* Add to Cart */}
        <button
          className="add-btn"
          onClick={addToCart}
          disabled={quantity === 0}
        >
          Add to Cart
        </button>
      </div>

      {/* Cart Section */}
      <div className="cart-section">
        <h2>🛍️ Cart Items</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Qty: <b>{item.qty}</b>
                <button onClick={() => removeFromCart(item.id)}>❌ Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
