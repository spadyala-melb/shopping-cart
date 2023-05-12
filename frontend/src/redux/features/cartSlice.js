import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartItemsQuantity: 0,
  cartItemsTotalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          ` ${state.cartItems[itemIndex].name} product quantity updated successfully`,
          {
            position: "bottom-left",
            autoClose: 1500,
            pauseOnHover: false,
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(` ${tempProduct.name} product added successfully`, {
          position: "bottom-left",
          autoClose: 1500,
          pauseOnHover: false,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action) => {
      const currentItems = state.cartItems;
      const newCartItems = currentItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(` ${action.payload.name} product removed successfully`, {
        position: "bottom-left",
        autoClose: 1500,
        pauseOnHover: false,
      });
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity >= 1) {
        state.cartItems[itemIndex].cartQuantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.info(
          ` ${action.payload.name} product quantity updated successfully`,
          {
            position: "bottom-left",
            autoClose: 1500,
            pauseOnHover: false,
          }
        );
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.info(
          ` ${action.payload.name} product quantity updated successfully`,
          {
            position: "bottom-left",
            autoClose: 1500,
            pauseOnHover: false,
          }
        );
      }
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      state.cartItemsQuantity = 0;
      state.cartItemsTotalPrice = 0;
      localStorage.removeItem("cartItems");
      toast.error(` Removed all items from Cart successfully`, {
        position: "bottom-left",
        autoClose: 1500,
        pauseOnHover: false,
      });
    },
    getTotals: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartItemsTotalPrice = total;
      state.cartItemsQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
