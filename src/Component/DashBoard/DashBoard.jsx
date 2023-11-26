import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaUserShield } from "react-icons/fa";

const DashBoard = () => {
  const isAdmin = true;
  return (
    <div className="flex ml-10">
      <div className="flex mt-5 justify-between w-[350px] bg-emerald-950">
        <div className="mt-5">
          <ul>
            {isAdmin ? (
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
              <></>
            )}
          </ul>
        </div>
      </div>
      <div className="flex-1 ml-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
