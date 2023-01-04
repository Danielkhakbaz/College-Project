import { useEffect } from "react";
import Landing from "components/landing/landing";
import Description from "components/description/description";
import Services from "components/services/services";
import Testimonials from "components/testimonials/testimonials";
import ContactUs from "components/contact-us/contact-us";

const Home = () => {
  useEffect(() => {
    document.title = "خانه‌‌‌ | پروژه بیمارستانی دکتر دامی";
  }, []);

  return (
    <>
      <Landing />
      <Description />
      <Services />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
