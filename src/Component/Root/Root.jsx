import { Outlet } from "react-router-dom";
import FooTer from "../Home/Footer";

const Root = () => {
  return (
    <div className="w-[1400px] ml-16">
      <Outlet></Outlet>
      <FooTer></FooTer>
    </div>
  );
};

export default Root;
