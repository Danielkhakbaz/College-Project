import { Divider, Flex, Text, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Divider />
      <Flex
        as="footer"
        height="90px"
        flexDirection={{ base: "column-reverse", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
        paddingX={{ base: 4, lg: 6 }}
        paddingY={{ base: 4, md: 6, lg: 8 }}
      >
        <Text fontSize={{ base: "xx-small", md: "xs" }}>
          این پروژه توسط
          <Text
            as="a"
            href="https://linkedin.com/in/danielkhakbaz/"
            target="_blank"
            color="teal"
          >
            {" "}
            دانیال خاکباز{" "}
          </Text>
          توسعه داده شده و تمام حقوق آن محفوظ است. &copy;
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            aria-label="LinkedIn logo"
            href="https://linkedin.com/in/danielkhakbaz/"
            target="_blank"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            aria-label="GitHub logo"
            href="https://github.com/danielkhakbaz"
            target="_blank"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            aria-label="Twitter logo"
            href="https://twitter.com/danielKhakbaz"
            target="_blank"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            aria-label="Twitter logo"
            href="https://instagram.com/danielKhakbaz"
            target="_blank"
            icon={<FaInstagram fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Footer;
