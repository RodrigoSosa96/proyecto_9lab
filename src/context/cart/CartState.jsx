import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, DECREMENT_ITEM, INCREMENT_ITEM, UPDATE_TOTAL, REALIZAR_VENTA } from "../Types";
import { postVenta } from "../../api/ventasAPI";

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
    total: 0,
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
    dispatch({ type: UPDATE_TOTAL, payload: Number(item.precio) })
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };
  const incrementItem = (item) => {
    dispatch({ type: INCREMENT_ITEM, payload: item.isbn });
    dispatch({ type: UPDATE_TOTAL, payload: Number(item.precio) })


    
  }
  const decrementItem = (item) => {
    dispatch({ type: DECREMENT_ITEM, payload: item.isbn });
    dispatch({type: UPDATE_TOTAL, payload: -Number(item.precio)})

  }
  const realizarVenta = () => {
    postVenta(state)
    dispatch({ type: REALIZAR_VENTA })
  }


  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        total: state.total,
        addToCart,
        showHideCart,
        incrementItem,
        decrementItem,
        realizarVenta
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
