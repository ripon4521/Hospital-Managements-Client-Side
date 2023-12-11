import { Outlet } from "react-router-dom";
import Navbar from "../Page/Home/Navbar/Navbar";
import img from '../../public/Banner/Vector.png'


const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;