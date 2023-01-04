import { Heading } from "@chakra-ui/react";

const TestimonialHeading = ({ children }) => {
  return (
    <Heading fontSize={{ base: "md", md: "xl" }} marginBottom="2">
      {children}
    </Heading>
  );
};

export default TestimonialHeading;
