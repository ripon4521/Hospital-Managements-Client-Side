import Aos from "aos";
import medkitImg from "../../../../public/Banner/medkit.png";
import bgImg from "../../../../public/Banner/bgimg.png";
import doctorImg from "../../../../public/Banner/doctorimg.png";
import Pathology from "../../../../public/Banner/Pathology.png";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Banner = () => {
  const [rotateDegree, setRotateDegree] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotateDegree((prevRotateDegree) => (prevRotateDegree + 1) % 360);
    }, 30); // Adjust speed of rotation here (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="lg:w-[700px] lg:mt-[100px] md:w-full md:p-4 md:pt-20 lg:pt-0 pl-10 lg:ml-24"
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
          <button className="px-6 ease-in duration-300 py-2 bg-[#9083D5] text-xl font-roboto font-semibold text-white rounded-xl mt-5">
            Tour
          </button>
     
        
        </div>
     
        <div
         data-aos="fade-left"
         
          className=" hidden md:hidden lg:block mt-20 mr-20 "
        >
          {/* <img
            className="lg:w-[600px] h-[950px] lg:-mt-[400px] lg:mr-[60px]  "
            src="../../../../public/Banner/Vector.png"
            alt=""
          /> */}
   <img 
        src='https://media.istockphoto.com/id/1283626383/vector/science-imperceptible.jpg?s=612x612&w=0&k=20&c=-bRrreiqKvKdpkNeaGxqlPips9Zhv9CjYFnKPDOZLyY='
        alt="Rotating Object"
        className="w-32 h-32 rounded-full hidden lg:block absolute mt-[35px] ml-[525px]  transform rotate-z-90 transition-transform duration-90000"
        style={{ transform: `rotateZ(${rotateDegree}deg)` }}
      />
   <img 
        src='https://play-lh.googleusercontent.com/FjMBH4Uu3wPVF37aAYt6iQpZWeCKeUtfoQUxAXREqqnp7cQfPx-qvIxqTH_lOfVPSQM=w240-h480-rw'
        alt="Rotating Object"
        className="w-32 h-32 rounded-full hidden lg:block absolute mt-[198px] ml-[600px]  transform rotate-z-90 transition-transform duration-90000"
        style={{ transform: `rotateZ(${rotateDegree}deg)` }}
      />
   <img 
        src={doctorImg}
        alt="Rotating Object"
        className="w-28 hidden lg:block absolute mt-[121px] ml-[173px]  transform rotate-z-90 transition-transform duration-90000"
        style={{ transform: `rotateZ(${rotateDegree}deg)` }}
      />
      <img 
        src='https://www.firstaid.org.uk/wp-content/uploads/2013/05/343_BSi2019_Medium_Aura3_front-720x720.jpg'
        alt="Rotating Object"
        className="w-[110px] rounded-full hidden lg:block absolute mt-[308px] ml-[90px]  transform rotate-z-90 transition-transform duration-90000"
        style={{ transform: `rotateZ(${rotateDegree}deg)` }}
      />
          <img className="w-[800px] -z-90"
            src={bgImg}
            alt=""
          />
        </div>
      </div>

      {/* <div className="float-right relative -mt-[560px] z-10">
        <img src="https://www.citymed.com.au/wp-content/uploads/2020/02/blog3-1.webp" alt="" />
      </div> */}

     
    </div>
  );
};

export default Banner;
// style={{backgroundImage: `url(${'https://i.ibb.co/gSxvg6k/Vector.png'})`, backgroundRepeat:'no-repeat', backgroundSize:'center', backgroundPosition:''} }
