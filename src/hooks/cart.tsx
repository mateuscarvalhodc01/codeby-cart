import React, { createContext, useContext, useEffect, useState } from 'react';

import ProductModel from '~/models/product';

interface ICartContext {
  cart: ProductModel[];
  setCart: (value: ProductModel[]) => void;
}

const CartContext = createContext<ICartContext>({} as ICartContext);

const useCart = (): ICartContext => {
  return useContext(CartContext);
};

const CartComponent: React.FC = ({ children }) => {
  const [cart, setCart] = useState<ProductModel[]>(() => {
    const sessionStorageCart = sessionStorage.getItem('@CodeBy:Cart');
    return sessionStorageCart ? JSON.parse(sessionStorageCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('@CodeBy:Cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartComponent, useCart };
