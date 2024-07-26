import { createContext, useReducer, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItemIndex > -1) {
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return updatedCart;
      } else {
        return [...state, action.payload];
      }
    }
    case 'REMOVE_FROM_CART': {
      return state.filter(
        (item) => !(item.id === action.payload.id && item.size === action.payload.size)
      );
    }
    case 'UPDATE_QUANTITY': {
      return state.map((item) =>
        item.id === action.payload.id && item.size === action.payload.size
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    }
    case 'CLEAR_CART':
      return [];
    case 'INITIALIZE_CART': {
      return action.payload;
    }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch({ type: 'INITIALIZE_CART', payload: JSON.parse(storedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const updatedProduct = {
      ...product,
      quantity: product.quantity && !isNaN(product.quantity) ? Number(product.quantity) : 1,
    };
    dispatch({ type: 'ADD_TO_CART', payload: updatedProduct });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const updateQuantity = (product, quantity) => {
    const validQuantity = quantity && !isNaN(quantity) ? Number(quantity) : 1;
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: product.id, size: product.size, quantity: validQuantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart, CartContext };


  