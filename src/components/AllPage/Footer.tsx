import Foot from "../../../public/home/foot1.png";
import Foot2 from "../../../public/home/foot2.png";
import Foot3 from "../../../public/home/foot3.png";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-3/90 w-full pt-20 h-fit pb-4 md:pb-0 md:h-96  mt-40 text-white">
        <div className="wrapper">
          <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-start justify-between">
            <div className="flex flex-col gap-10 md:w-1/3">
              <h1 className="text-2xl">SEAMEO RECFON Building</h1>
              <h1>
                Jl. Utan Kayu Raya No. 1A, Utan Kayu Utara, Kec. Matraman, Kota
                Jakarta Timur, Daerah Khusus Ibukota Jakarta, Jakarta 13120 |
                Indonesia. <br /> <br />
                <br />
                Contact: +62-21 22116225 <br /> Information@seameo-recfon.org
              </h1>
            </div>
            <div className="flex text-2xl md:items-center flex-col gap-10 md:w-[45%]">
              <h1>Visitors</h1>
              <img src={Foot} alt="foot" className="md:w-1/4"></img>
            </div>
            <div className="flex flex-col text-2xl items-center gap-2">
              <h1 className="md:text-center">
                {" "}
                Excellence in Food and Nutrition for Quality Human Resources
              </h1>
              <div className="flex flex-center gap-4 mt-10">
                <img src={Foot2} alt="Foto" className="w-32" />
                <img src={Foot3} alt="Foto" className="w-60" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        id="close"
        className=" bg-3 w-full text-white h-20 flex justify-center items-center gap-4"
      >
        <FaRegCopyright className="text-3xl"/>
        <h1 className="font-bold text-white">Copyright SEAMEO RECFON | HRGA</h1>
      </div>
    </>
  );
};

export default Footer;
