import { Link } from "react-router-dom";
import { Text, Button } from "@chakra-ui/react";

const ButtonDivider = () => {
  return (
    <>
      <Text
        fontWeight="bold"
        fontSize={{ base: "xs", md: "md", lg: "lg" }}
        lineHeight={1.6}
      >
        با پر کردن فرم پزشکی می‌توانید بیشتر به سلامت خود برسید.
      </Text>
      <Link to="/forms">
        <Button colorScheme="teal" size={{ base: "sm", md: "md" }}>
          پر کردن فرم پزشکی
        </Button>
      </Link>
    </>
  );
};

export default ButtonDivider;
