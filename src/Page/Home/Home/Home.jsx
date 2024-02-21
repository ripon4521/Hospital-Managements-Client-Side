
import Footer from "../../Footer/Footer";
import Login from "../../Login/Login";
import Biography from "../Biography/Biography";
import Contact from "../Contact/Contact";
import OurDoctors from "../OurDoctors/OurDoctors";
import Banner from "./Banner";
import Example from "./Example";
import SliderPath from "./Slider/SliderPath";

const Home = () => {
    return (
        <div className=" ">
            <Banner></Banner>
            <Example></Example>
            <Biography></Biography>
           <SliderPath></SliderPath>
           <OurDoctors></OurDoctors>
           <Contact></Contact>
           <Footer></Footer>

           

          
        </div>
    );
};

export default Home;