import React, { ReactNode, useState } from "react";
import { IProduct } from "./../shared/types";

/**
 * Context for sharing data across related components (Product entity)
 *
 *
 */

type ContextProps = {
  data: {
    products: IProduct[] | undefined;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      products: IProduct[] | undefined;
    }>
  >;
};

type ProductProviderPops = {
  children: ReactNode;
};

const ProductContext = React.createContext<ContextProps | null>(null);

const ProductProvider = ({ children }: ProductProviderPops) => {
  const [data, setData] = useState<{
    products: IProduct[] | undefined;
  }>({ products: undefined });

  return (
    <ProductContext.Provider value={{ data, setData }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  const context = React.useContext(ProductContext);
  if (!context) {
    throw new Error(`useProduct must be used inside ProductProvider`);
  }
  return context;
};
export { ProductProvider, useProduct };
