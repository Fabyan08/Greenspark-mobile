const Hero = () => {
  return (
    <section id="hero" className="bg-about w-full h-[50rem] flex items-center ">
      <div className=" wrapper">
        <div className="flex flex-col  gap-8 md:w-1/2">
          <h1 className="text-1 font-bold text-3xl md:text-6xl text-nowrap">
            SEAMEO RECFON
          </h1>
          <hr className="border-2 border-1 w-3/4 md:w-[85%]" />
          <h1 className="text-white font-bold text-xl md:text-5xl text-nowrap">
            About Our Program
          </h1>
          <p className="text-white">
            This Internship Program is an activity that provides opportunities
            for students with the aim of applying and gaining knowledge, general
            and specific skills in the working world, as well as internalizing
            professional attitudes and work culture relevant to the needs of the
            institution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
