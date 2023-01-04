import { Flex } from "@chakra-ui/react";
import ButtonDivider from "components/services/button-divider/button-divider";
import Description from "components/services/description/description";
import Cards from "components/services/cards/cards";

const Services = () => {
  return (
    <>
      <Flex id="services" flexDirection="column" textAlign="center">
        <Flex
          background="teal"
          color="white"
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 4 }}
          justifyContent="space-between"
          alignItems="center"
          paddingX={{ base: 4, lg: 6 }}
          paddingY={{ base: 4, md: 6 }}
        >
          <ButtonDivider />
        </Flex>
        <Flex
          flexDirection="column"
          gap={{ base: 2, md: 8 }}
          paddingX={{ base: 4, lg: 6 }}
          paddingY={{ base: 4, md: 6, lg: 8 }}
        >
          <Description />
          <Cards />
        </Flex>
      </Flex>
    </>
  );
};

export default Services;
