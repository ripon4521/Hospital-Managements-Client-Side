import Aos from "aos";
import { useEffect } from "react";
import bannerImg from '../../../public/login Banner/Other 03.png'

import "aos/dist/aos.css";
const LoginPageBanner = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

      
    return (
        <div>
             <div className="">
      <div className="flex justify-between items-center ">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="lg:w-[750px] lg:mt-[100px] md:w-full md:p-4 md:pt-20 lg:pt-0 pl-10 lg:ml-24"
        >
          <h1
           
            className=" text-[35px] md:text-[80px] mt-20 md:mt-0 font-roboto font-bold text-[#000]"
          >
            We help people to get appointment in online
          </h1>
      
          <p className="text-xl font-roboto">
            Lorem Media is a full-service social media agency. We offer
            businesses innovative solutions that deliver the right type of
            audience to you in the most effective strategies possible. We strive
            to develop a community around your business, polishing your
            branding, and improving your public relations.
          </p>
       
     
        
        </div>
     
        <div
         data-aos="fade-left"
         
          className=" hidden md:hidden lg:block mt-20 mr-20 "
        >
          <img
            className="lg:w-[900px] h-[1000px] lg:-mt-[300px] lg:ml-40 "
            src="../../../../public/Banner/Vector.png"
            alt=""
          />
       
   
        </div>
      </div>

      <div   data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="float-right hidden lg:block relative lg:-mt-[800px] z-10">
        <img className="w-[700px]" src={bannerImg} alt="" />
      </div>

     
    </div>
        </div>
    );
};

export default LoginPageBanner;