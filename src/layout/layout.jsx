import Footer from "layout/footer/footer";
import GoToTopButton from "utils/go-to-top-button/go-to-top-button";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />

      <GoToTopButton />
    </>
  );
};

export default Layout;
