import Hero from "../components/application/Hero";
import Footer from "../components/AllPage/Footer";
import Header from "../components/AllPage/Header";
import Eligibility from "../components/application/Eligibility";
import Documents from "../components/application/Documents";
import Registration from "../components/application/Registration";
import Information from "../components/application/Information";

const Application = () => {
  return (
    <>
      <Header />
      <Hero />
      <Eligibility />
      <Documents />
      <Registration />
      <Information />
      <Footer />
    </>
  );
};

export default Application;
