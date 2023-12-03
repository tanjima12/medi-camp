import { Footer } from "flowbite-react";
import "./Home.css";
import { Link } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { CgInstagram } from "react-icons/cg";

const FooTer = () => {
  return (
    <div>
      <Footer container className="mt-10 bg-[#EAFAF1] mb-5">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <div className="flex gap-2 mt-20">
              <Footer.Brand
                src="https://i.ibb.co/pbttF4z/Screenshot-153.png"
                name="CareCamp"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white font-Cinzel">
                C<span className="logoColor">a</span>rE Ca
                <span className="logoColor">m</span>P
              </span>
            </div>
            <Footer.LinkGroup>
              <Footer.Link href="#" className="text-xl font-poppins">
                About
              </Footer.Link>
              <Footer.Link href="#" className="text-xl font-poppins">
                Our Social Site
                <a href="https://www.facebook.com">
                  <MdFacebook className="ml-10"></MdFacebook>
                </a>
                <a href="https://www.instagram.com/">
                  <CgInstagram className="ml-10 mt-5"></CgInstagram>
                </a>
              </Footer.Link>
              <Footer.Link className="text-xl font-poppins">
                <Link to="/avaiCamps"> Available Camps</Link>
              </Footer.Link>
              <Footer.Link href="#" className="text-xl font-poppins">
                Contact
                <h1>phone:0125478</h1>
                <h1>Email:mediCamp@gmail.com</h1>
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="CareCamp™" year={2023} />
        </div>
      </Footer>
    </div>
  );
};

export default FooTer;
