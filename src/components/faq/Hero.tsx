import { useState } from "react";
import hero from "../../../public/faq/hero.png";
import bg1 from "../../../public/faq/1.svg";
import bg2 from "../../../public/faq/2.svg";
import { FaArrowRight } from "react-icons/fa";
import { accordionData } from "../../constants/Faq";
const Hero = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="hero" className=" pt-40 -mb-40">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col gap-4 md:w-1/2">
            <h1 className="font-bold text-4xl text-3">
              Frequently Asked Question
            </h1>
            <hr className="border-2 w-[70%] md:w-[34rem]" />
            <p className="mt-20 w-80 md:w-full font-semibold">
              Here is the list of questions and answers for the SEAMEO RECFON
              Internship Program. If your question is not included in the list
              below, you can send your question via email to <br />
              <span className="text-5">information@seameo-recfon.org.</span>
            </p>
          </div>
          <img src={hero} alt="Hero" className="w-80 md:w-full" />
        </div>
      </div>
      <div className="bg-2 relative flex justify-center items-center w-full h-fit py-10">
        <div className="wrapper justify-center relative z-40 items-center flex flex-col gap-10">
          {accordionData.map((accordion, index) => (
            <div
              key={index}
              className={`bg-white md:w-[60rem] ${
                openIndex === index ? "h-auto" : "h-fit"
              } rounded-xl shadow-2xl mb-4`}
            >
              <div
                className="flex items-center gap-10 p-10 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h1>{accordion.title}</h1>
                <FaArrowRight
                  className={`text-7xl md:text-4xl transition-transform ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <>
                  <hr className="border-2 border-[#263238]/50 w-full " />
                  <p className="p-10">{accordion.content}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0">
          <img src={bg1} alt="Background" />
        </div>
        <div className="absolute left-0 bottom-0">
          <img src={bg1} alt="Background" />
        </div>

        <div className="flex items-center h-full justify-end">
          <img src={bg2} alt="Background" className="absolute w-[25rem]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
