import { NavLink, Outlet } from "react-router-dom";
import { CgAdd, CgEditFade, CgMenu, CgProfile } from "react-icons/cg";
import { FaPaypal, FaUserShield } from "react-icons/fa";
import NavBar from "../Home/Navbar";
import { FaCcAmazonPay } from "react-icons/fa6";
import { MdFeedback, MdOutlinePayment } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic, { axiosSecure } from "../Hook/useAxiosPublic";
import { AuthContext } from "../Authentication/AuthProvider";
import { Helmet } from "react-helmet-async";

const DashBoard = () => {
  // const isAdmin = true;
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosPublic();
  const { data: profile = [] } = useQuery({
    queryKey: ["dashuser"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/?email=${user?.email}`);
      return res.data;
    },
  });
  const [data] = profile;
  console.log(data);
  console.log("role", data?.role);

  return (
    <div>
      <Helmet>
        <title>MediCamp||Dashboard</title>
      </Helmet>
      <NavBar></NavBar>
      <div className="flex ml-10 ">
        <div className="flex mt-5 justify-between w-[350px] h-[700px] bg-emerald-950 ">
          <div className="mt-5 mr-5">
            <ul>
              {data?.role === "Healthcare Professionals" ? (
                <>
                  <li className="">
                    <NavLink
                      className="text-white ml-10 text-2xl font-Rosarivo flex "
                      to="/dashboard/manage-profile"
                    >
                      <CgProfile></CgProfile>
                      Manage Profile
                    </NavLink>
                  </li>
                </>
              ) : data?.role === "Organizers" ? (
                <>
                  <li className="">
                    <NavLink
                      className="text-white ml-10 text-2xl font-Rosarivo flex "
                      to="/dashboard/manage-profile"
                    >
                      <CgProfile></CgProfile>
                      Manage Profile
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className="text-white ml-10 text-2xl font-Rosarivo flex "
                      to="/dashboard/addCamps"
                    >
                      <CgAdd></CgAdd>
                      Add Camps
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className="text-white ml-10 text-2xl font-Rosarivo flex "
                      to="/dashboard/manageCamps"
                    >
                      <CgMenu></CgMenu>
                      Manage Camps
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className="text-white ml-10 text-2xl font-Rosarivo flex "
                      to="/dashboard/manageRegister"
                    >
                      <CgEditFade></CgEditFade>
                      Manage Register Camps
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className="text-white ml-10 text-2xl font-Rosarivo flex "
                      to="/dashboard/allPayment"
                    >
                      <CgEditFade></CgEditFade>
                      All Payment History
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className="text-white ml-10 text-2xl font-Rosarivo flex "
                      to="/dashboard/upComing"
                    >
                      <CgEditFade></CgEditFade>
                      ADD Upcoming Camp
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-white ml-10 text-2xl font-Rosarivo flex "
                      to="/dashboard/users"
                    >
                      <FaUserShield></FaUserShield>
                      Home Users
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="">
                    <NavLink
                      className="text-white ml-10 text-2xl font-Rosarivo flex "
                      to="/dashboard/manage-profile"
                    >
                      <CgProfile></CgProfile>
                      Manage Profile
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className="text-white ml-10 text-2xl font-Rosarivo flex "
                      to="/dashboard/registered-camps"
                    >
                      <CgEditFade></CgEditFade>
                      Registered Camps
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className="text-white ml-10 text-2xl font-Rosarivo flex "
                      to="/dashboard/history"
                    >
                      <MdPayments></MdPayments>
                      Payment History
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink
                      className="text-white ml-10 text-2xl font-Rosarivo flex "
                      to="/dashboard/feedBack"
                    >
                      <MdFeedback></MdFeedback>
                      Give Your FeedBack and Ratings
                    </NavLink>
                  </li>
                </>
              )}

              {/* <li className="">
                <NavLink
                  className="text-white ml-10 text-2xl font-Rosarivo flex "
                  to="/dashboard/payment"
                >
                  <FaCcAmazonPay></FaCcAmazonPay>
                  Payment
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex-1 ml-16">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
