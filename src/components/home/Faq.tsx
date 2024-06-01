import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import { accordionData } from "../../constants/HomeFaq";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section
      id="faq"
      className="wrapper mt-20 bg-gradient-to-b from-1 to-2 w-full h-fit pb-20 rounded-[2rem] p-4"
    >
      <h1 className="text-center font-bold text-3xl pt-10">
        Frequently Asked Question
      </h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:px-20">
        {accordionData.map((accordion, index) => (
          <div
            key={index}
            className={`bg-white md:w-fit ${
              openIndex === index ? "h-auto" : "h-fit"
            } rounded-xl shadow-2xl mb-4`}
          >
            <div
              className="flex items-center gap-10 p-10 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h1>{accordion.title}</h1>
              <GrFormNextLink
                className={`text-7xl md:text-[6rem] transition-transform ${
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
      <div className="flex-center">
        <Link
          to="#"
          className="mt-10 bg-3 w-40 p-2 h-12 rounded-full text-white font-bold flex-center"
        >
          Read More {">>"}{" "}
        </Link>
      </div>
    </section>
  );
};

export default Faq;
