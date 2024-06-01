import About from "./components/home/About";
import Header from "./components/AllPage/Header";
import Hero from "./components/home/Hero";
import Reason from "./components/home/Reason";
import Video from "./components/home/Video";
import Faq from "./components/home/Faq";
import Footer from "./components/AllPage/Footer";
function App() {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <About />
        <Reason />
        <Video />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
