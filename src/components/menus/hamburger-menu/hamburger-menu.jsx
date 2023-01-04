import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { MdMenu, MdLightMode, MdDarkMode } from "react-icons/md";
import { menuItems } from "components/menus/menuItems";

const HamburgerMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<MdMenu />}
          color="white"
          variant="unstyled"
          fontSize={28}
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem
              key={item.title}
              fontWeight="bold"
              fontSize={12}
              marginY={1}
            >
              <a href={item.href}>{item.title}</a>
            </MenuItem>
          ))}
          <MenuItem fontSize={18} color="teal" onClick={toggleColorMode}>
            {colorMode === "light" ? <MdLightMode /> : <MdDarkMode />}
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
