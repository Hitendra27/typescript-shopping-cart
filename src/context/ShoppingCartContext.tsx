import {ReactNode, createContext, useContext} from 'react';

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartProvider = {
  children: ReactNode;
};
export function ShoppingCartProvider({children}: ShoppingCartProvider) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
