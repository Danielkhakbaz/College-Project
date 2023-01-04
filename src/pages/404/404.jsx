import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Flex, Heading, Text, Button, useColorMode } from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import BlackLogo from "assets/logos/logo-black.svg";
import WhiteLogo from "assets/logos/logo-white.svg";

const NotFound = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    document.title = "صفحه‌ای یافت نشد | پروژه بیمارستانی دکتر دامی";
  }, []);

  return (
    <>
      <Flex
        minHeight="calc(100vh - 90px)"
        flexDirection="column"
        paddingX={6}
        paddingY={8}
      >
        <Flex justifyContent="space-between">
          <Link to="/">
            <img
              src={colorMode === "light" ? BlackLogo : WhiteLogo}
              alt="logo"
            />
          </Link>
          <Button
            fontSize="xl"
            color="teal"
            variant="outline"
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MdLightMode /> : <MdDarkMode />}
          </Button>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
          gap={8}
        >
          <Heading size="lg">صفحه‌ای یافت نشد!</Heading>
          <Text>
            صفحه‌ای با این آدرس وجود ندارد، با کلیک به روی دکمه‌ی زیر می‌توانید
            به صفحه‌ی اول برگردید.
          </Text>
          <Link to="/">
            <Button colorScheme="teal">بازگشت به خانه</Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default NotFound;
