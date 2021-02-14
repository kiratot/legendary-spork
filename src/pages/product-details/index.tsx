import { useParams } from "react-router";
import {
  Badge,
  Container,
  Heading,
  HStack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
} from "@chakra-ui/react";
import { useProduct } from "../../contexts/ProductContext";

const ProductDetails: React.FC = () => {
  const {
    data: { products },
  } = useProduct();

  const { id } = useParams<Record<string, string>>();

  // Reusing the same (in-memory) cached data for retrieving individual products
  // In a real case we would have probably requested a product endpoint using the id
  // Or also used a better/appropriate caching system

  const product = products?.find((product) => product.id.toString() === id);

  return (
    <Container
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxWidth="4xl"
    >
      <VStack p={10} bg="gray.100" spacing="10em">
        <HStack spacing={10}>
          <Heading>{product?.name}</Heading>
          <Heading>{product?.supplier} </Heading>
          <Badge
            fontSize="1em"
            colorScheme={product?.status === "expired" ? "yellow" : "green"}
          >
            {product?.status}
          </Badge>
        </HStack>
        <HStack spacing={10}>
          <StatGroup>
            <Stat mr="2em">
              <StatLabel>Charges</StatLabel>
              <StatNumber>£{product?.dailystandingcharge}</StatNumber>
              <StatHelpText>Daily Standing Charge</StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Rate</StatLabel>
              <StatNumber>£{product?.rate}</StatNumber>
            </Stat>
            <Stat mr="2em">
              <StatLabel>Renewable</StatLabel>
              <StatNumber>{product?.renewable}%</StatNumber>
            </Stat>
            <Stat mr="2em">
              <StatLabel>Length</StatLabel>
              <StatNumber>{product?.contractlength} </StatNumber>
              <StatHelpText>Contract length in months</StatHelpText>
            </Stat>
          </StatGroup>
        </HStack>
      </VStack>
    </Container>
  );
};
export default ProductDetails;
