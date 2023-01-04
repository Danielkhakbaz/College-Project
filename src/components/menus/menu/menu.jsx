import { Link } from "react-router-dom";
import {
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { menuItems } from "components/menus/menuItems";

const Menu = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Spacer />
      <Flex>
        <ButtonGroup size="sm" colorScheme="blackAlpha" variant="ghost">
          {menuItems.map((item) =>
            item.title === "پر کردن فرم‌ها" ? (
              <Link key={item.title} to={item.href}>
                <Button
                  color="white"
                  colorScheme={item.buttonColor}
                  variant={item.variant}
                >
                  {item.title}
                </Button>
              </Link>
            ) : (
              <a key={item.title} href={item.href}>
                <Button
                  color="white"
                  colorScheme={item.buttonColor}
                  variant={item.variant}
                >
                  {item.title}
                </Button>
              </a>
            )
          )}
          <Button fontSize="xl" color="teal" onClick={toggleColorMode}>
            {colorMode === "light" ? <MdLightMode /> : <MdDarkMode />}
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Menu;
