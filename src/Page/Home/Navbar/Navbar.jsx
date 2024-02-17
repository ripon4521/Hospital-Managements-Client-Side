import { Link, NavLink } from "react-router-dom";
import logo from '../../../../public/Logo/Standard Collection 12.png'



const Navbar = () => {


    const navLink = <div className="flex flex-col p-2 md:p-0 lg:flex-row justify-center items-center gap-10 text-[#000000]">
    <NavLink to='/' className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200"
            : " font-roboto text-[18px]  font-semibold  "
        }><a>Home</a></NavLink>
    <NavLink to='/appoinment' className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200"
            : "font-roboto  text-[18px] font-semibold   "
        }><a>Appointment</a></NavLink>
    <NavLink to='/services' className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200"
            : " font-roboto text-[18px] font-semibold  "
        }><a>Services</a></NavLink>
    <NavLink to='/aboutus' className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200"
            : " font-roboto text-[18px] font-semibold  "
        }><a>About Us</a></NavLink>
    <NavLink to='contact' className={({ isActive }) =>
          isActive
            ? "  font-roboto text-[18px] font-semibold px-2 py-1 rounded bg-blue-200"
            : " font-roboto text-[18px] font-semibold   "
        }><a>Contact Us</a></NavLink>
   
      

    </div>

    return (
        <div  className="navbar  z-50 bg-base-100   border fixed">
  <div className="navbar-start  lg:ml-24">
    <div className="dropdown">

      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu   menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {navLink}
      </ul>
    </div>
    <img className="w-10" src={logo} alt="" />
    <a className=" font-roboto  font-semibold  text-xl md:text-2xl drop-shadow-2xl text-[#000000]">MediLab Hospital</a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>

  <div className="navbar-end flex justify-center items-center z-10 gap-5">
    <Link to='/login' className="font-roboto px-5 py-3 rounded-2xl bg-white shadow-lg  font-semibold ">SignIn</Link>
    <a className=" font-roboto text-white hidden md:block font-semibold shadow-lg bg-[#9083D5] px-5 py-3 rounded-2xl">Regester</a>
  </div>

</div>
    );
};

export default Navbar;