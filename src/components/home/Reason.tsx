import type { Reason } from "../../constants/Reason";
import { reasons } from "../../constants/Reason";

const ReasonCard: React.FC<Reason> = ({ imageSrc, altText, description }) => {
  return (
    <div className="flex-col-center gap-4">
      <img src={imageSrc} alt={altText} className="w-full h-60" />
      <p className="text-md text-center">{description}</p>
    </div>
  );
};

const Reason = () => {
  return (
    <>
      <section id="reason" className="wrapper mt-20 font-sans">
        <div className="flex flex-col">
          <h1 className="text-slate-950 text-2xl font-semibold">
            <span className="text-5xl font-bold text-4">WHY</span>you{" "}
          </h1>
          <h1 className="text-slate-950 text-2xl font-semibold">
            should <span className="text-5xl font-bold text-4">JOIN</span> us?
          </h1>
        </div>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row gap-14 font-semibold">
            {reasons.map((reason, index) => (
              <ReasonCard
                key={index}
                imageSrc={reason.imageSrc}
                altText={reason.altText}
                description={reason.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reason;
