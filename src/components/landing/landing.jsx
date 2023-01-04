import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flex, Heading, Button } from "@chakra-ui/react";
import HamburgerMenu from "components/menus/hamburger-menu/hamburger-menu";
import Menu from "components/menus/menu/menu";
import Logo from "assets/logos/logo-white.svg";
import ArrowDown from "assets/images/arrow-down.webp";

const Landing = () => {
  const [width, setWidth] = useState(0);
  const [hamburgerMenu, setShowHamburgerMenu] = useState(false);

  useEffect(() => {
    if (width > 320 && width < 768) {
      setShowHamburgerMenu(true);
    } else {
      setShowHamburgerMenu(false);
    }

    setWidth(window.innerWidth);
  }, [width]);

  return (
    <>
      <Flex
        className="landing__background"
        minHeight="100vh"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        paddingX={6}
        paddingY={8}
      >
        <Flex
          minWidth="100%"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex cursor="pointer">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </Flex>
          {hamburgerMenu ? <HamburgerMenu /> : <Menu />}
        </Flex>
        <Flex
          flexDirection="column"
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Heading
            fontSize={{ base: "2xl", md: "4xl", lg: "8xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-l, #E6FFFA, #B2F5EA)"
            backgroundClip="text"
            lineHeight={2}
          >
            پروژه بیمارستانی دکتر دامی
          </Heading>
        </Flex>
        <Button variant="unstyled" display={{ base: "none", md: "block" }}>
          <a href="#description">
            <img
              className="arrow__icon"
              src={ArrowDown}
              width={188 / 3}
              height={105 / 3}
              alt="arrow down icon"
            />
          </a>
        </Button>
      </Flex>
    </>
  );
};

export default Landing;
