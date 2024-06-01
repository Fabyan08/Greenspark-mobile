import regis from "../../../public/application/regis.png";

const Registration = () => {
  return (
    <section
      id="registration"
      className="bg-2 rounded-[3rem] w-full h-fit wrapper mt-20"
    >
      <div className="wrapper">
        <div className="flex justify-center">
          <div className="text-center bg-white border-2 -mt-10 py-6 px-10 rounded-full text-3 w-fit  text-4xl font-bold">
            Eligibility
          </div>
        </div>
      </div>
      <img src={regis} alt="Registration" className="pt-10 pb-10 px-10" />
    </section>
  );
};

export default Registration;
