import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  Flex,
  Heading,
  VStack,
  Input,
  Textarea,
  FormControl,
  FormErrorMessage,
  Text,
  Center,
  Button,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import BlackLogo from "assets/logos/logo-black.svg";
import WhiteLogo from "assets/logos/logo-white.svg";

const ContactUs = () => {
  const { colorMode } = useColorMode();

  const toast = useToast();

  return (
    <>
      <Flex
        id="contact-us"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={8}
        paddingX={{ base: 4, lg: 6 }}
        paddingY={{ base: 4, md: 6, lg: 8 }}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={8}
          marginBottom={6}
        >
          <img
            src={colorMode === "light" ? BlackLogo : WhiteLogo}
            width={36}
            height={36}
            alt="logo"
          />
          <Heading fontWeight="bold" size={{ base: "md", md: "lg" }}>
            ارتباط با ما
          </Heading>
        </Flex>
        <Formik
          initialValues={{
            name: "",
            email: "",
            description: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("پرکردن نام الزامی است!")
              .min(3, "حداقل کارکتر وارد شده باید بیشتر از ۳ باشد!"),
            email: Yup.string()
              .email("فرمت ایمیل درست نمی‌باشد!")
              .required("پرکردن ایمیل الزامی است!"),
            description: Yup.string().required("پرکردن توضیحات الزامی است!"),
          })}
          onSubmit={(_, actions) => {
            toast({
              title: "اطلاعات شما ثبت گردید.",
              description: "به زودی با شما تماس گرفته می‌شود.",
              status: "success",
              duration: 3000,
              containerStyle: {
                fontSize: "14px",
              },
            });

            actions.resetForm();
          }}
        >
          {({ values, errors, touched, isValid, dirty, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <VStack minWidth="90vw" spacing={4} alignItems="center">
                <FormControl
                  isInvalid={!!errors.name && touched.name}
                  width={{ base: "100%", md: "80%", lg: "55%" }}
                >
                  <Field
                    as={Input}
                    name="name"
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    maxLength={128}
                    variant="filled"
                    fontSize={{ base: 12, md: 14 }}
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.email && touched.email}
                  width={{ base: "100%", md: "80%", lg: "55%" }}
                >
                  <Field
                    as={Input}
                    name="email"
                    type="email"
                    placeholder="ایمیل شما"
                    maxLength={128}
                    variant="filled"
                    fontSize={{ base: 12, md: 14 }}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.description && touched.description}
                  width={{ base: "100%", md: "80%", lg: "55%" }}
                >
                  <Field
                    as={Textarea}
                    name="description"
                    maxLength={1024}
                    placeholder="توضیحات"
                    variant="filled"
                    fontSize={{ base: 12, md: 14 }}
                  />
                  <FormErrorMessage>{errors.description}</FormErrorMessage>
                </FormControl>
                <Text fontSize="sm">1024 / {values.description.length}</Text>
                <Center>
                  <Button
                    type="submit"
                    colorScheme="teal"
                    fontSize={{ base: "sm", md: "md" }}
                    rounded={10}
                    paddingX={{ base: 6, md: 8 }}
                    paddingY={{ base: 2, md: 2 }}
                    disabled={!(isValid && dirty)}
                  >
                    ثبت
                  </Button>
                </Center>
              </VStack>
            </form>
          )}
        </Formik>
      </Flex>
    </>
  );
};

export default ContactUs;
