import { Stack, useColorModeValue } from "@chakra-ui/react";

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      background={useColorModeValue("white", "gray.800")}
      textAlign="center"
      position="relative"
      boxShadow="lg"
      rounded="xl"
      padding={8}
      _after={{
        content: `""`,
        width: 0,
        height: 0,
        position: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
      }}
    >
      {children}
    </Stack>
  );
};

export default TestimonialContent;
