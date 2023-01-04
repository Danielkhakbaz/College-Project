import { Text } from "@chakra-ui/react";

const TestimonialText = ({ children }) => {
  return (
    <Text fontSize={{ base: "xs", md: "sm" }} textAlign="center">
      {children}
    </Text>
  );
};

export default TestimonialText;
