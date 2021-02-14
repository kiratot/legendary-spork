import {
  Button,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  StackProps,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdLocalGasStation } from "react-icons/md";

type SearchBoxProps = StackProps & {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  sendRequest: () => Promise<void>;
};

const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  setValue,
  sendRequest,
  isLoading,
  ...rest
}) => {
  const [input, setInput] = useState(value);
  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    //we only set the final input as a value in order to prevent unnecessary re-renders
    setValue(input);
    sendRequest();
  };

  return (
    <VStack w="50%" p={10} spacing={5} backgroundColor="gray.100" {...rest}>
      <Heading>Total Gas Consumption</Heading>
      <VStack as="form" onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={MdLocalGasStation} color="gray.300" />}
          />

          <Input
            bg="white"
            w="100%"
            type="number"
            placeholder="Total Gas Consumption"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </InputGroup>
        <Button w="100%" bg="gray.300" disabled={isLoading} type="submit">
          Search Products
        </Button>
      </VStack>
    </VStack>
  );
};

export default SearchBox;
