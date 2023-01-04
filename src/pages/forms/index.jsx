import { useEffect } from "react";
import {
  Flex,
  Heading,
  Button,
  Text,
  Progress,
  useColorMode,
} from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FormsContent } from "components/forms/content/forms-content";
import { useStepContext } from "providers/step/step-context";
import BlackLogo from "assets/logos/logo-black.svg";
import WhiteLogo from "assets/logos/logo-white.svg";

const Index = () => {
  const { step } = useStepContext();

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    document.title = "فرم‌ها | پروژه بیمارستانی دکتر دامی";
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
          <a href="/">
            <img
              src={colorMode === "light" ? BlackLogo : WhiteLogo}
              alt="logo"
            />
          </a>
          <Button
            fontSize="xl"
            color="teal"
            variant="outline"
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MdLightMode /> : <MdDarkMode />}
          </Button>
        </Flex>
        <Flex flexDirection="column" gap={4} paddingTop={6}>
          <Flex flexDirection="column" justifyContent="space-between">
            <Text fontSize="sm">۱۱ / {step.toLocaleString("fa")}</Text>
            <Progress
              value={Number(`${step}00`) / 11}
              colorScheme="teal"
              isAnimated
            />
          </Flex>
          <Heading size="lg" marginY={4}>
            {FormsContent(step)?.title}
          </Heading>
        </Flex>
        <Flex
          flexDirection="column"
          border="1px"
          borderColor="gray.400"
          borderRadius={10}
          padding={4}
          marginY={4}
        >
          {FormsContent(step)?.component}
        </Flex>
      </Flex>
    </>
  );
};

export default Index;
