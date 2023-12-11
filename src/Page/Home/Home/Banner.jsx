

const Banner = () => {
    return (
    <div>
            <div className="flex justify-between items-center">
            <div className="lg:w-[700px] md:w-full md:p-4 md:pt-20 lg:pt-0 pl-10">
                <h1 className=" text-[40px] md:text-[80px] mt-20 md:mt-0 font-roboto font-bold text-[#000]">We help people to 
get appointment 
in online</h1>
<p className="text-xl font-roboto">Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.</p>
<button className="px-6 py-2 bg-[#9083D5] text-xl font-roboto font-semibold text-white rounded-xl mt-5">Tour</button>
            </div>
            <div  className=" hidden md:hidden lg:block  ">
        <img className="w-[1061px] h-[950px] -mt-20   " src="../../../../public/Banner/Vector.png" alt="" />
       
            </div>
            
            
        </div >
     <div className=" hidden md:hidden lg:flex justify-end lg:-mt-[750px]">
     <img  src="../../../../public/Banner/Ikbal 5.png" alt="" />
        <img className="" src="../../../../public/Banner/Ikbal 2.png" alt="" />
     </div>
    </div>
    );
};

export default Banner;
// style={{backgroundImage: `url(${'https://i.ibb.co/gSxvg6k/Vector.png'})`, backgroundRepeat:'no-repeat', backgroundSize:'center', backgroundPosition:''} }