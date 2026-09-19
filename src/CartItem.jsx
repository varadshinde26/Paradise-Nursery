import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  updateQuantity,
} from "./redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price of all items
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Increase quantity
  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease quantity
  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  // Remove item from cart
  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  // Checkout message
  const handleCheckout = () => {
    alert("Checkout is Coming Soon!");
  };

  return (
    <div className="cart-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Paradise Nursery</Link>
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      {/* Shopping Cart */}
      <main className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <Link
              to="/plants"
              className="continue-shopping-btn"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  {/* Plant Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  {/* Plant Information */}
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>

                    <p>
                      Unit Price: ${item.price.toFixed(2)}
                    </p>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    {/* Quantity Controls */}
                    <div className="quantity-controls">
                      <button
                        onClick={() => handleDecrease(item)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </button>
                    </div>

                    {/* Total Cost for This Plant */}
                    <p className="item-total">
                      Total: $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>

                    {/* Delete Button */}
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="cart-summary">
              <h2>
                Total Amount: ${totalAmount.toFixed(2)}
              </h2>

              <div className="cart-actions">
                {/* Checkout */}
                <button
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>

                {/* Continue Shopping */}
                <Link
                  to="/plants"
                  className="continue-shopping-btn"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;
