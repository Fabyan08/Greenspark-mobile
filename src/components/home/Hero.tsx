import Heroo from "../../../public/home/Hero.svg";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="wrapper pb-10 flex flex-col md:items-center  md:flex-row gap-10 justify-between pt-40"
      >
        <div className="flex flex-col  gap-8 md:w-1/2">
          <h1 className="text-1 font-bold text-3xl md:text-6xl text-nowrap">
            SEAMEO RECFON
          </h1>
          <hr className="border-2 border-1 w-3/4 md:w-[85%]" />
          <h1 className="text-3 font-bold text-xl md:text-5xl text-nowrap">
            Internship Program
          </h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam."
          </p>
          <div className="mt-14">
            <a
              href=""
              className="bg-4 px-8 py-4 rounded-md font-bold text-white"
            >
              Join Us!
            </a>
          </div>
        </div>
        <div className="md:w-[70%]">
          <img src={Heroo} alt="Hero Image" />
        </div>
      </section>
    </>
  );
};

export default Hero;
