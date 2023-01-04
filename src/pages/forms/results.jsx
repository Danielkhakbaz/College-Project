import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Flex, Button, useColorMode } from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import BlackLogo from "assets/logos/logo-black.svg";
import WhiteLogo from "assets/logos/logo-white.svg";

const Result = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    document.title = "نتیجه‌فرم‌ها | پروژه بیمارستانی دکتر دامی";
  }, []);

  return (
    <>
      <Flex
        minWidth="100%"
        minHeight="calc(100vh - 90px)"
        flexDirection="column"
        paddingX={6}
        paddingY={8}
      >
        <Flex flexDirection="row" justifyContent="space-between" gap={6}>
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
      </Flex>
    </>
  );
};

export default Result;
