import React, { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { IProduct } from "../../shared/types";
import ProductsTable from "../../components/ProductsTable";
import SearchBox from "../../components/SearchBox";
import useSubmit from "../../hooks/useSubmit";
import { useProduct } from "../../contexts/ProductContext";

const ProductPage: React.FC = () => {
  const { data, setData } = useProduct();
  const { isLoading, error, sendRequest } = useSubmit<{
    products: IProduct[] | undefined;
  }>(`${window.location.origin}/products.json`, setData);

  const [totalGasConsumption, setTotalGasConsumption] = useState("");

  return (
    <VStack spacing={10} d="flex" alignItems="center" flexDirection="column">
      <SearchBox
        value={totalGasConsumption}
        setValue={setTotalGasConsumption}
        sendRequest={sendRequest}
        isLoading={isLoading}
      />
      <Box w="5xl">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Something went wrong...</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          data.products && (
            <ProductsTable
              products={data?.products}
              totalGasConsumption={Number(totalGasConsumption)}
            />
          )
        )}
      </Box>
    </VStack>
  );
};

export default ProductPage;
