import { Footer } from "flowbite-react";
import "./Home.css";

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
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#" className="text-xl font-poppins">
                Licensing
              </Footer.Link>
              <Footer.Link href="#" className="text-xl font-poppins">
                Contact
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
