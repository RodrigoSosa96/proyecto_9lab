import { SHOW_HIDE_CART, ADD_TO_CART, DECREMENT_ITEM, INCREMENT_ITEM, UPDATE_TOTAL, REALIZAR_VENTA } from "../Types";



const CartReducer = (state, action) => {
  switch (action.type) {

    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }

    case ADD_TO_CART: {
      const item = state.cartItems.find(item => item.isbn === action.payload.isbn)
      if (item) {
        const updatedItems = state.cartItems.map((item) => {
          if (item.isbn === action.payload.isbn) {
            return { ...item, cantidad: item.cantidad + 1 };
          }
          return item;
        })
        return { ...state, cartItems: updatedItems }
      } else {
        return { ...state, cartItems: [...state.cartItems, { ...action.payload, cantidad: 1 }] }
      }
    }

    case INCREMENT_ITEM: {
      const updatedItems = state.cartItems.map((item) => {
        if (item.isbn === action.payload) {
          return { ...item, cantidad: item.cantidad + 1 };
        }
        return item;
      })
      return { ...state, cartItems: updatedItems }
    }

    case DECREMENT_ITEM: {
      const updatedItems = state.cartItems.map(item => {
        if (item.isbn === action.payload) {
          return { ...item, cantidad: item.cantidad - 1 }
        }
        return item
      }).filter(item => item.cantidad !== 0)
      return { ...state, cartItems: updatedItems }
    }

    case UPDATE_TOTAL: {
      return {
        ...state,
        total: state.total + action.payload
      }
    }
    case REALIZAR_VENTA: {
      return {
        ...state,
        cartItems: [],
        total: 0
      }
    }


    default:
      return state;
  }
};

export default CartReducer;
