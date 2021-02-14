import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import ProductPage from "./pages/products";
import ProductDetails from "./pages/product-details";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <Router>
      <ChakraProvider>
        <CSSReset />
        <Switch>
          <ProductProvider>
            <Route path="/product/:id" exact>
              <ProductDetails />
            </Route>
            <Route path="/" exact>
              <ProductPage />
            </Route>
          </ProductProvider>
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
