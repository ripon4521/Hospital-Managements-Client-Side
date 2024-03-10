import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/Logo/Standard Collection 12.png";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUser from "../../../Hooks/useUser";

const Navbar = () => {
  const { user, logout } = useAuth();
  // console.log(user);
  const [users] = useUser();
  // console.log(users?.data);
  const filter = users.filter((item) => item?.data?.email === user?.email);
  console.log(filter);

  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const Sighnout = () => {
    logout();
    return toast.success("Login SuccesFull", {
      duration: 1000000,
    });
  };

  // console.log(user);
  const profile = (
    <div className="relative" ref={dropdownRef}>
      <button
        className="btn btn-ghost btn-circle avatar"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        <div className="w-10 rounded-full">
          <img
            alt="Profile"
            src="https://cdn3.vectorstock.com/i/1000x1000/08/37/profile-icon-male-user-person-avatar-symbol-vector-20910837.jpg"
            className="img-fluid"
          />
        </div>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 p-2 shadow bg-white rounded w-52 z-10">
          <Link className="block px-4 py-2 hover:bg-gray-100">
            {filter[0]?.data?.firstName}{" "}
            <span className="badge bg-blue-500 text-white">
              {filter[0]?.activeTab}
            </span>
          </Link>
          <Link className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
          <Link
            onClick={Sighnout}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );

  const navLink = (
    <div className="flex flex-col p-2 md:p-0 lg:flex-row justify-center items-center gap-10 text-[#000000]">
      {filter[0]?.activeTab == "Admin" ? (
        <div className="flex flex-col p-2 md:p-0 lg:flex-row justify-center items-center gap-10 text-[#000000]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200 "
                : " font-roboto text-[18px]  font-semibold  "
            }
          >
            <a>Home</a>
          </NavLink>
          <NavLink
            to="/appoinment"
            className={({ isActive }) =>
              isActive
                ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200"
                : "font-roboto  text-[18px] font-semibold   "
            }
          >
            <a>Appointment</a>
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200 "
                : " font-roboto text-[18px] font-semibold  "
            }
          >
            <a>Services</a>
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive
                ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200 "
                : " font-roboto text-[18px] font-semibold  "
            }
          >
            <a>About Us</a>
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200 "
                : " font-roboto text-[18px] font-semibold   "
            }
          >
            <a>Contact Us</a>
          </NavLink>
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              isActive
                ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200 ml-10"
                : " font-roboto text-[18px] font-semibold   "
            }
          >
            <a>Dashboard</a>
          </NavLink>
        </div>
      ) : (
        <div className="flex flex-col p-2 md:p-0 lg:flex-row justify-center items-center gap-10 text-[#000000]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200 "
                : " font-roboto text-[18px]  font-semibold  "
            }
          >
            <a>Home</a>
          </NavLink>
          <NavLink
            to="/appoinment"
            className={({ isActive }) =>
              isActive
                ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200"
                : "font-roboto  text-[18px] font-semibold   "
            }
          >
            <a>Appointment</a>
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200 "
                : " font-roboto text-[18px] font-semibold  "
            }
          >
            <a>Services</a>
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive
                ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200 "
                : " font-roboto text-[18px] font-semibold  "
            }
          >
            <a>About Us</a>
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200 "
                : " font-roboto text-[18px] font-semibold   "
            }
          >
            <a>Contact Us</a>
          </NavLink>
        </div>
      )}
    </div>
  );

  return (
    <div className="navbar  z-50 bg-base-100   border fixed">
      <ToastContainer></ToastContainer>
      <div className="navbar-start  lg:ml-24">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu   menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <img className="w-10" src={logo} alt="" />
        <a className=" font-roboto  font-semibold  text-xl md:text-2xl drop-shadow-2xl text-[#000000]">
          MediLab Hospital
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end  ">
        {user ? (
          <div>{profile}</div>
        ) : (
          <div className="flex lg:mr-10 lg:gap-5">
            <Link
              to="/signin"
              className="font-roboto px-5 py-3 rounded-2xl bg-white shadow-lg  font-semibold "
            >
              SignIn
            </Link>
            <Link
              to="/signup"
              className=" font-roboto text-white hidden md:block font-semibold shadow-lg bg-[#9083D5] px-5 py-3 rounded-2xl"
            >
              Regester
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
