import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []

  );

  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Added to cart successfully");
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Navbar
        cartCount={cart.length}

        onCartClick={() => setShowCart(true)}
        onHomeClick={() => setShowCart(false)}
      />
      {showCart ? (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
        />
      ) : (
        <Products addToCart={addToCart} />
      )}



    </>
  );
}

export default App;