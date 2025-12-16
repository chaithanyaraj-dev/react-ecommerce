import React, { useState } from "react";
import "./ProductList.css"

const PRODUCTS = [
  { id: 1, name: "Men T-Shirt", price: 799, image: "./images/tshirt.jpg" },
  { id: 2, name: "Women Kurti", price: 1299, image: "./images/women kurti.avif" },
  { id: 3, name: "Jeans", price: 1999, image: "./images/fitjeans.jpeg" },
  { id: 4, name: "Gold Necklace", price: 25000, image: "./images/necklace.jpeg" },
  { id: 5, name: "Silver Earrings", price: 16700, image: "./images/siearings.jpeg" },
  { id: 6, name: "Handbag", price: 2499, image: "./images/OPAC.jpeg" },
  { id: 7, name: "Shoes", price: 3499, image: "./images/shoes.jpeg" },
  { id: 8, name: "Watch", price: 4999, image: "./images/watch.jpeg" },
  { id: 9, name: "Backpack", price: 2899, image: "./images/bagpack.jpeg" },
  { id: 10, name: "Sunglasses", price: 1599, image: "./images/sunglass.jpeg" },
  { id: 11, name: "Hoodie", price: 2199, image: "./images/hoodie.jpeg" },
  { id: 12, name: "Ring", price: 8999, image: "./images/ring.jpeg" },
  { id: 13, name: "Belt", price: 999, image: "./images/belt.jpeg" },
  { id: 14, name: "Cap", price: 599, image: "./images/cap.jpeg" },
  { id: 15, name: "Sandals", price: 1799, image: "./images/sandals.jpeg" },
];
export default function Products({ addToCart }) {
  const [search, setSearch] = useState("");

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Products</h2>

      <input
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="product-grid">
        {filteredProducts.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>

            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}