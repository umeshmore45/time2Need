import { Footer } from "../footer";
import { Header } from "../header";

export const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
