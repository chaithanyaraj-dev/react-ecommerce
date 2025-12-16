function Navbar({ cartCount, onCartClick, onHomeClick }) {
  return (
    <nav style={styles.nav}>
      <h3 style={{ cursor: "pointer" }} onClick={onHomeClick}>
        E-Commerce
      </h3>
      <button onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#222",
    color: "white"
  }
};

export default Navbar;