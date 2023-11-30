import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import NavBar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold text-center mt-10">Contact Us</h1>
      <div className="flex justify-evenly mt-10">
        <div>
          <h1 className="text-xl font-bold">Visit Our Social Sit:</h1>
          <h1 className="flex gap-3 items-center">
            Facebook
            <FaFacebook className="text-blue"></FaFacebook>
          </h1>
          <h1 className="flex gap-3 items-center">
            InstaGram
            <FaInstagram></FaInstagram>
          </h1>
          <h1 className="flex gap-3 items-center">
            Twitter
            <FaTwitter></FaTwitter>
          </h1>
        </div>

        <div>
          <h1 className="text-xl font-bold">Live Contact:</h1>
          <h1>Visit Our Office:mogbazar dhaka</h1>
          <h1 className="flex gap-3 items-center">
            Gmail<MdOutgoingMail></MdOutgoingMail>
          </h1>
          <h1>Contact:0123654</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
