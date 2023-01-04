import { Flex, Heading, Text, Highlight } from "@chakra-ui/react";
import ChakraLogo from "assets/logos/chakra-logo.png";
import NextLogo from "assets/logos/next-logo.png";
import ReactLogo from "assets/logos/react-logo.png";

const Description = () => {
  return (
    <>
      <Flex
        id="description"
        flexDirection="column"
        gap={{ base: 1, md: 6 }}
        textAlign="center"
        paddingX={{ base: 4, lg: 6 }}
        paddingY={{ base: 4, md: 6, lg: 8 }}
      >
        <Heading
          fontWeight="bold"
          size={{ base: "md", md: "lg" }}
          marginBottom={6}
        >
          توضیحات پروژه
        </Heading>
        <Text fontSize={{ base: 14, md: 16, lg: 18 }} lineHeight={2.75}>
          <Highlight
            query={["دانیال خاکباز", "پروژه", "React", "Next.js", "ChakraUI"]}
            styles={{
              background: "teal.100",
              rounded: "full",
              paddingX: "1.5",
              paddingY: "0.5",
            }}
          >
            این وب‌سایت برای درس پروژه می باشد. وظیفه طراحی، توسعه و نگهداری
            کدها توسط دانیال خاکباز انجام شده است. برای توسعه این وب‌سایت از
            ابزارهای مختلفی نظیر React ، Next.js و ChakraUI استفاده شده است.
          </Highlight>
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
          gap={{ base: 8, md: 4 }}
        >
          <img src={ChakraLogo} width={550} height={150} alt="chakra logo" />
          <img src={NextLogo} width={280} height={150} alt="next.js logo" />
          <img src={ReactLogo} width={180} height={150} alt="react.js logo" />
        </Flex>
      </Flex>
    </>
  );
};

export default Description;
