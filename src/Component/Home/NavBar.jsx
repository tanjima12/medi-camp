import { Dropdown, Navbar } from "flowbite-react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { Button } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

// import { HomeIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignout = () => {
    logOut()
      .then((result) => {
        console.log(result, "successfully log out");
      })
      .catch((error) => console.error(error));
  };
  const NavList = (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-emerald-700 border-b-2 text-xl hover:bg-red-50 px-3 py-2 rounded-xl font-poppins"
            : " text-black text-xl font-poppins px-3 py-2"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-emerald-700 border-b-2 text-xl hover:bg-red-50 px-3 py-2 rounded-xl font-poppins"
            : " text-black text-xl font-poppins px-3 py-2"
        }
        to="/avaiCamps"
      >
        Available Camps
      </NavLink>

      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-emerald-700 border-b-2 text-xl hover:bg-red-50 px-3 py-2 rounded-xl font-poppins"
            : " text-black text-xl font-poppins px-3 py-2"
        }
        to="Us"
      >
        Contact Us
      </NavLink>

      {user ? (
        <>
          <div className="flex items-center">
            <span>{user?.displayName}</span>
            <img className="h-10 w-10 rounded-full" src={user?.photoURL}></img>
          </div>
          <Button
            onClick={handleSignout}
            className="font-poppins text-xl"
            gradientDuoTone="tealToLime"
          >
            Log Out
          </Button>
        </>
      ) : (
        <>
          <NavLink to="/login">
            <Button
              className="font-poppins text-xl"
              gradientDuoTone="tealToLime"
            >
              Log In
            </Button>
          </NavLink>

          <NavLink to="/register">
            <Button
              className="font-poppins text-xl"
              gradientMonochrome="success"
            >
              Register
            </Button>
          </NavLink>
        </>
      )}
      <NavLink to="/dashboard">
        <button className="btn">
          <MdDashboard className="text-3xl text-orange-600"></MdDashboard>
        </button>
      </NavLink>
    </>
  );
  return (
    <div className="mt-5">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <img
            src="https://i.ibb.co/pbttF4z/Screenshot-153.png"
            className="mr-3 h-6 sm:h-9"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white font-Cinzel">
            C<span className="logoColor">a</span>rE Ca
            <span className="logoColor">m</span>P
          </span>
        </Navbar.Brand>
        {/* <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
             
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div> */}
        <Navbar.Collapse>{NavList}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
