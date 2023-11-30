import Lottie from "lottie-react";
import animation from "../../assets/3iTrmCjQzA.json";
import { MdOutgoingMail, MdWhatsapp } from "react-icons/md";

const AnyHelp = () => {
  return (
    <div className="flex flex-col lg:flex-rowmt-20 items-center">
      <div className="w-[500px]">
        <Lottie loop={true} animationData={animation}></Lottie>
      </div>
      <div className="text-3xl ">
        <h1 className="font-Cinzel mt-10 text-rose-500">
          For Any Emergency Contact
        </h1>
        <h1 className="flex gap-2 items-center">
          <MdOutgoingMail></MdOutgoingMail>
          campCare@camp.com
        </h1>
        <h1 className="flex gap-2 items-center">
          <MdWhatsapp></MdWhatsapp>
          0123654
        </h1>
      </div>
    </div>
  );
};

export default AnyHelp;
