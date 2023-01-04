import { Flex, Stack, Heading } from "@chakra-ui/react";
import Testimonial from "components/testimonials/testimonial/testimonial";
import TestimonialContent from "components/testimonials/testimonial-content/testimonial-content";
import TestimonialHeading from "components/testimonials/testimonial-heading/testimonial-heading";
import TestimonialText from "components/testimonials/testimonial-text/testimonial-text";
import TestimonialAvatar from "components/testimonials/testimonial-avatar/testimonial-avatar";

const comments = [
  {
    title: "نظر تیم ما",
    text: "یکی از بهترین تجربه‌های کاری ما با این تیم بوده‌است. وقت شناسی، تجربه و مهارت یکی از اصلی‌ترین دلایل انتخاب این تیم برای ما بوده‌است. ما به شما کار‌کردن با این تیم حرفه‌ای رو پیشنهاد می‌کنیم.",
    avatarSrc:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    companyName: "شرکت ۱",
    companyRole: "مدیریت شرکت ۱",
  },
  {
    title: "نظر تیم ما",
    text: "یکی از بهترین تجربه‌های کاری ما با این تیم بوده‌است. وقت شناسی، تجربه و مهارت یکی از اصلی‌ترین دلایل انتخاب این تیم برای ما بوده‌است. ما به شما کار‌کردن با این تیم حرفه‌ای رو پیشنهاد می‌کنیم.",
    avatarSrc:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    companyName: "شرکت ۲",
    companyRole: "مدیرعامل شرکت ۲",
  },
  {
    title: "نظر تیم ما",
    text: "یکی از بهترین تجربه‌های کاری ما با این تیم بوده‌است. وقت شناسی، تجربه و مهارت یکی از اصلی‌ترین دلایل انتخاب این تیم برای ما بوده‌است. ما به شما کار‌کردن با این تیم حرفه‌ای رو پیشنهاد می‌کنیم.",
    avatarSrc:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    companyName: "شرکت ۳",
    companyRole: "مدیرعامل شرکت ۳",
  },
];

const Testimonials = () => {
  return (
    <Flex
      id="comments"
      as={Stack}
      background="teal"
      gap={6}
      paddingX={{ base: 4, lg: 6 }}
      paddingY={{ base: 4, md: 6, lg: 8 }}
    >
      <Stack alignItems="center" marginBottom={6}>
        <Heading
          fontWeight="bold"
          size={{ base: "md", md: "lg" }}
          color="white"
        >
          نظر مشتریان ما
        </Heading>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 8, lg: 10 }}
      >
        {comments.map((comment) => (
          <Flex
            key={comment.companyName + comment.companyRole}
            flexDirection="column"
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>{comment.title}</TestimonialHeading>
                <TestimonialText>{comment.text}</TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={comment.avatarSrc}
                name={comment.companyName}
                role={comment.companyRole}
              />
            </Testimonial>
          </Flex>
        ))}
      </Stack>
    </Flex>
  );
};

export default Testimonials;
