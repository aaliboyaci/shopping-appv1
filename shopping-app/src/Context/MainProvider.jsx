import React, {useState, useReducer } from 'react';
export const MainContext = React.createContext();


export const MainProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'SET_CART':
        return action.payload;
      case 'REMOVE_ITEM':
        return state.filter((item) => item.id !== action.payload);
      case 'CLEAR_CART':
        return [];
      default:
        return state;
    }
  };

  const [productNo, setProductNo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [products, setProducts] = useState([]);
  const [isLogin, setIsLogin] = useState(0);
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const contextValues = {
    productNo,
    setProductNo,
    isLoading,
    setIsLoading,
    products,
    setProducts,
    isLogin,
    setIsLogin,
    user,
    setUser,
    currentPage,
    setCurrentPage,
    cart,
    dispatch, // dispatch'i burada tanımlayın
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
  };

  return (
    <MainContext.Provider value={contextValues}>
      {children}
    </MainContext.Provider>
  );
};
