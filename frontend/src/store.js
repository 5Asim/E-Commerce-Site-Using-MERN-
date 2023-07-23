import { createContext, useReducer } from "react";
export const Store = createContext();

export function StoreProvider(props) {
  const initialState = {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    cart: {
      cartItems: [],
    },
  };
  function reducer(state, action) {
    switch (action.type) {
      case "USER_SIGNIN":
        return { ...state, userInfo: action.payload };
      case "CART_ADD_ITEM":
        const newItem = action.payload;
        const existItem = state.cart.cartItems.find(
          (item) => item._id === newItem._id
        );
        const cartItems = existItem
          ? state.cart.cartItems.map((item) =>
              item._id === existItem._id ? newItem : item
            )
          : [...state.cart.cartItems, newItem];
        return {
          ...state,
          cart: {
            ...state.cart,
            cartItems: [...state.cart.cartItems, action.payload],
          },
        };
      case "CART_REMOVE_ITEM": {
        const cartItems = state.cart.cartItems.filter(
          (item) => item.id !== action.payload._id
        );
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        return { ...state, cart: { ...state, cartItems } };
      }

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
