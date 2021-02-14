import {
  Link,
  Table,
  TableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { annualCost } from "../../utils/annualCost";
import { IProduct } from "../../shared/types";

type ProductTableProps = TableProps & {
  products: IProduct[] | undefined;
  totalGasConsumption: number;
};

const ProductsTable: React.FC<ProductTableProps> = ({
  products,
  totalGasConsumption,
  ...rest
}) => {
  return (
    <Table variant="striped" {...rest}>
      <Thead>
        <Tr>
          <Th>Supplier</Th>
          <Th>Annual Cost</Th>
          <Th>Contract Length</Th>
          <Th>More</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products?.map((product) => (
          <Tr key={product.id}>
            <Td>{product.supplier}</Td>
            <Td>{annualCost(totalGasConsumption, product)}</Td>
            <Td>{product.contractlength} months </Td>
            <Td>
              <Link as={RouterLink} to={`/product/${product.id}`}>
                more info
              </Link>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
export default ProductsTable;
