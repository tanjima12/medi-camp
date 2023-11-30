import { Outlet } from "react-router-dom";
import FooTer from "../Home/Footer";

const Root = () => {
  return (
    <div className="lg:w-[1400px] lg:ml-16">
      <Outlet></Outlet>
      <FooTer></FooTer>
    </div>
  );
};

export default Root;
