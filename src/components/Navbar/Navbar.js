import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach(item => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/home">
        <h2 data-testid="navbar-heading" className={styles.navbar__logo}>
          Kinaxis Home Task
        </h2>
      </Link>
      <Link to="/products">
        <div className={styles.navbar__shop}>
          <h3 className={styles.shop__title}>Shop</h3>
        </div>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 data-testid="cart-title" className={styles.cart__title}>
            Cart
          </h3>
          <img
            className={styles.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div data-testid="cart-count" className={styles.cart__counter}>
            {cartCount}
          </div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  };
};

export default connect(mapStateToProps)(Navbar);
