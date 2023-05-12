import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
// import PayButton from "./PayButton";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  getTotals,
} from "../redux/features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { isLoggedin } = useSelector((state) => state.auth);
  const isLoggedin = localStorage.getItem("isLoggedin");

  useEffect(() => {
    dispatch(getTotals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, isLoggedin]);

  const handleRemoveItem = (product) => {
    dispatch(removeItem(product));
  };

  const handleIncrease = (product) => {
    dispatch(increaseQuantity(product));
  };

  const handleDecrease = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleLoginCheckout = () => {
    navigate("/login");
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="cart-container container">
        <div className="cart-title">
          <h1>Shopping Cart</h1>
        </div>
        <div className="cart-headers">
          <div className="name">PRODUCT</div>
          <div className="price">PRICE</div>
          <div className="quantity">QUANTITY</div>
          <div className="total">TOTAL</div>
        </div>
        <div className="horizontal-line">
          <hr />
        </div>

        {cart.cartItems.length === 0 ? (
          <>
            <h3>No items in Cart</h3>
            <div>
              <Link to="/" className="link-start-shopping">
                <BsArrowLeft /> Start Shopping
              </Link>
            </div>
          </>
        ) : (
          cart.cartItems.map((product) => {
            return (
              <div className="cart-product" key={product.id}>
                <div className="product-content">
                  <div className="prd-image">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="product-desc">
                    <p className="prd-title">{product.name}</p>
                    <p>{product.desc}</p>
                    <Link
                      className="btn-remove"
                      onClick={() => handleRemoveItem(product)}
                    >
                      Remove
                    </Link>
                  </div>
                </div>
                <div className="product-price">${product.price}</div>
                <div className="product-qty">
                  <div className="qty-container">
                    <span>
                      <button onClick={() => handleDecrease(product)}>-</button>
                    </span>
                    <span>{product.cartQuantity}</span>
                    <span>
                      <button onClick={() => handleIncrease(product)}>+</button>
                    </span>
                  </div>
                </div>
                <div className="product-total">
                  ${product.price * product.cartQuantity}
                </div>
              </div>
            );
          })
        )}

        <div className="horizontal-line">
          <hr />
        </div>
        <div className="total-container">
          <div className="clear-cart">
            <button className="btn-clr-cart" onClick={handleClearCart}>
              Clear Cart
            </button>
          </div>
          <div></div>
          <div className="sub-total">
            <p className="subtotal-text">Subtotal</p>
          </div>
          <div>
            <p className="subtotal-price">
              <strong>${cart.cartItemsTotalPrice}</strong>
            </p>
          </div>
        </div>
        <div className="continue-shopping-container">
          <div className="content">
            <div className="tax-text">
              Taxes and shipping calculated at checkout
            </div>
            {isLoggedin ? (
              <div>
                {/* <PayButton cartItems={cart.cartItems} /> */}
                <button className="btn" onClick={handleCheckout}>
                  Check Out
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="btn secondary-btn"
                  onClick={handleLoginCheckout}
                >
                  Login to Check Out
                </button>
              </div>
            )}

            <div>
              <Link to="/" className="link-continue-shopping">
                <BsArrowLeft /> Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
