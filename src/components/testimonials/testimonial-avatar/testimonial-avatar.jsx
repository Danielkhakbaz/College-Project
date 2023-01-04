import { Flex, Avatar, Stack, Text } from "@chakra-ui/react";

const TestimonialAvatar = ({ src, name, role }) => {
  return (
    <Flex flexDirection="column" alignItems="center" marginTop={8}>
      <Avatar src={src} marginBottom={2} />
      <Stack textAlign="center" spacing={-1}>
        <Text
          fontWeight={600}
          fontSize={{ base: "sm", md: "md" }}
          marginBottom={2}
          color="white"
        >
          {name}
        </Text>
        <Text fontSize={{ base: "xs", md: "sm" }} color="white">
          {role}
        </Text>
      </Stack>
    </Flex>
  );
};

export default TestimonialAvatar;
