import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/features/cartSlice";
import { logout } from "../redux/features/authSlice";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  // const { isLoggedin } = useSelector((state) => state.auth);

  // When we refresh the page or redirected back from payment pages like paypal, stripe
  // we lose the state in REDUX hance we have to use the localStorage to persist the state
  // Better way is use the redux-persist to acheive the same.

  const isLoggedin = localStorage.getItem("isLoggedin");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(clearCart());
    await dispatch(logout());
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <p>Online Shop</p>
      </Link>
      <Link to="/cart">
        <span className="cart-img">
          <FiShoppingCart />
          <span className="cart-count">{cart.cartItemsQuantity}</span>
        </span>
      </Link>

      <div className="login-container">
        {isLoggedin ? (
          <Link onClick={handleLogout} className="login-link">
            Logout
          </Link>
        ) : (
          <>
            <Link to="/admin" className="login-link">
              Admin
            </Link>
            <Link to="/login" className="login-link">
              Login
            </Link>
            <Link to="/register" className="register-link">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
