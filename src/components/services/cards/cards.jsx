import { Link } from "react-router-dom";
import { Flex, Box, Badge, Heading, Text, Button } from "@chakra-ui/react";
import HospitalService1 from "assets/images/hospital/hospital-service-1.jpeg";
import HospitalService2 from "assets/images/hospital/hospital-service-2.jpeg";
import HospitalService3 from "assets/images/hospital/hospital-service-3.jpeg";

const cards = [
  {
    id: 0,
    imageURL: HospitalService1,
    title: "لورم ایپسوم",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    id: 1,
    imageURL: HospitalService2,
    title: "لورم ایپسوم",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    id: 2,
    imageURL: HospitalService3,
    title: "لورم ایپسوم",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
];

const Cards = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        gap={{ base: 6, md: 12 }}
      >
        {cards.map((card) => (
          <Box
            key={card.id}
            flexDirection="row"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="xl"
          >
            <img src={card.imageURL} alt="خدمات بیمارستان" />
            <Box paddingX={6} paddingY="3">
              <Flex
                position="relative"
                flexDirection={{ base: "column", md: "row" }}
                justifyContent="center"
                alignItems={{ lg: "center" }}
                paddingBottom={3}
              >
                <Badge
                  colorScheme="teal"
                  position="absolute"
                  right={0}
                  borderRadius="full"
                  paddingX="2"
                >
                  جدید
                </Badge>
                <Heading
                  fontWeight="semibold"
                  fontSize={{ base: 16, md: 22 }}
                  lineHeight="tight"
                  noOfLines={1}
                  marginTop="1"
                  paddingTop={{ base: "3", md: "3" }}
                >
                  {card.title}
                </Heading>
              </Flex>
              <Box>
                <Text
                  fontSize={{ base: 12, md: 14 }}
                  textAlign="justify"
                  noOfLines={6}
                >
                  {card.text}
                </Text>
              </Box>
              <Box>
                <Link to="/forms">
                  <Button
                    colorScheme="teal"
                    fontSize={{ base: "sm", md: "md" }}
                    marginY={4}
                    paddingX={{ base: 6, md: 8 }}
                    paddingY={{ base: 2, md: 2 }}
                  >
                    پر کردن فرم‌ها
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Cards;
