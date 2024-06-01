import flower from "../../../public/application/flower.png";
import pdf from "../../../public/application/pdf.png";
const Information = () => {
  return (
    <section id="information" className="bg-white h-[50rem] pt-20">
      <img src={flower} alt="Flower" className="absolute z-10 left-0" />
      <div className="flex flex-col relative z-20 gap-4 justify-center items-center">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="flex justify-center items-center flex-col gap-4">
            <h1 className="text-3 font-bold text-3xl">More Information</h1>
            <h1 className="text-black text-xl font-semibold">
              For more information, click down below!
            </h1>
          </div>
          <img src={pdf} alt="PDF" />
        </div>
        <a href="" className="text-white font-semibold text-xl rounded-xl bg-green-500 px-10 py-4">Download PDF</a>
      </div>
    </section>
  );
};

export default Information;
