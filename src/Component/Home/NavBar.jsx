import { Dropdown, Navbar } from "flowbite-react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { Button } from "flowbite-react";

const NavBar = () => {
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
      <NavLink to="/login">
        <Button
          className="font-poppins text-xl"
          outline
          gradientDuoTone="tealToLime"
        >
          Log In
        </Button>
      </NavLink>
      <NavLink to="/register">
        <Button className="font-poppins text-xl" gradientMonochrome="success">
          Register
        </Button>
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
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <MdDashboard className="text-3xl text-orange-600"></MdDashboard>
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
        </div>
        <Navbar.Collapse>{NavList}</Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
