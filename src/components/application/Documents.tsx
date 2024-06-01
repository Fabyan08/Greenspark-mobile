import document from "../../../public/application/document.png";
const Documents = () => {
  return (
    <section id="document" className="pt-20">
      <div className="wrapper">
        <div className="flex flex-col gap-4">
          <h1 className="text-3 text-3xl font-bold">Required Documents </h1>
          <hr className=" border-1 w-1/4" />
        </div>
        <div className="mt-20 flex flex-col md:flex-row gap-20 justify-between">
          <div className="md:w-1/2">
            <img src={document} alt="" />
          </div>
          <div className="flex flex-col text-lg gap-10">
            <h1 className="font-bold">
              Prepare the required documents below before you apply!
            </h1>
            <ul className="flex flex-col ml-10 gap-2 font-semibold">
              <h1>
                1. Letter of Statement (University | Vocational High School)
              </h1>
              <h1>2. Curriculum Vitae</h1>
              <h1>
                3. Scanned Color Copy of Indonesian Identity Card (KTP for
                Indonesian) and Passport for International
              </h1>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
