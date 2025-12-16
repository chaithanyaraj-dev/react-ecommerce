function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div key={index} style={styles.item}>
          <div>
            <strong>{item.name}</strong>
            <p>₹{item.price}</p>
          </div>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottom: "1px solid #ddd",
    paddingBottom: 10
  }
};

export default Cart;