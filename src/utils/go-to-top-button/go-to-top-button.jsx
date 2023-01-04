import { useState, useEffect } from "react";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [
    displayAndPointerOfGoToTopButton,
    setDisplayAndPointerOfGoToTopButton,
  ] = useState(["none", "none"]);

  const gotToTopButtonColor = useColorModeValue("white", "black");
  const gotToTopButtonColorScheme = useColorModeValue("blackAlpha", "teal");

  useEffect(() => {
    window.addEventListener("scroll", handleOpacityOfTheGoToTopButton);
  });

  const handleOpacityOfTheGoToTopButton = () => {
    const { pageYOffset, innerHeight } = window;

    if (pageYOffset > innerHeight / 2) {
      setDisplayAndPointerOfGoToTopButton(["flex", "pointer"]);
    } else {
      setDisplayAndPointerOfGoToTopButton(["none", "initial"]);
    }
  };

  const handleGoToTopButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <IconButton
        aria-label="Scroll-to-top button"
        icon={<FaArrowAltCircleUp fontSize={30} />}
        color={gotToTopButtonColor}
        colorScheme={gotToTopButtonColorScheme}
        onClick={handleGoToTopButton}
        display={displayAndPointerOfGoToTopButton[0]}
        position="fixed"
        bottom={{ md: "25px", lg: "75px" }}
        right={{ md: "25px", lg: "40px" }}
        textAlign="center"
        transition="0.3s"
        cursor={displayAndPointerOfGoToTopButton[1]}
        padding={{ md: "0.5rem 0.5rem", lg: "1.5rem 1.5rem" }}
        zIndex={999}
      />
    </>
  );
};

export default GoToTopButton;
