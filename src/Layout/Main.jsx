import { Outlet } from "react-router-dom";
import Navbar from "../Page/Home/Navbar/Navbar";
import img from '../../public/Banner/Vector.png'
import Footer from "../Page/Footer/Footer";


const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default Main;