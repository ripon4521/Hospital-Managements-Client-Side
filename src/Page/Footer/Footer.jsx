import logo from '../../../public/Logo/Standard Collection 12.png'
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";


const Footer = () => {
    return (
      <div className='container mx-auto my-10 pl-5 md:mb-10'>
          <hr  className='my-5'/>
        <div className=' grid grid-cols-1 md:grid-cols-4  '>
           
            <div className='flex mb-5'>
            <img className="w-10 h-10" src={logo} alt="" />
    <a className=" font-roboto  font-semibold  text-xl md:text-2xl drop-shadow-2xl text-[#000000]">MediLab Hospital</a>
            </div>

            <div className='text-start'>
                <h1 className='text-2xl font-roboto text-black font-semibold drop-shadow-md'>Quick Links</h1>
                <p className='text-xl font-roboto text-black mt-5'>Home</p>
                <p className='text-xl font-roboto text-black'>Appoinmnet</p>
                <p className='text-xl font-roboto text-black'>Service</p>
                <p className='text-xl font-roboto text-black'>About Us</p>
                <p className='text-xl font-roboto text-black'>Contact Us</p>
            </div>
            <div className='text-start'>
                <h1 className='text-2xl font-roboto text-black font-semibold drop-shadow-md'>Hours</h1>
                <p className='text-xl font-roboto text-black mt-5'>Monday: <span className='ml-4'>9:00-18:00</span></p>
                <p className='text-xl font-roboto text-black'>Tuesday:            : <span className='ml-4'>9:00-18:00</span></p>
                <p className='text-xl font-roboto text-black'>Wenesday: <span className='ml-4'>9:00-18:00</span></p>
                <p className='text-xl font-roboto text-black'>Thirsday: <span className='ml-4'>9:00-18:00</span></p>
                <p className='text-xl font-roboto text-black'>Friday: <span className='ml-4'>9:00-18:00</span></p>
                <p className='text-xl font-roboto text-black'>Sunday: <span className='ml-4'>9:00-18:00</span></p>
              
            </div>
            <div className='text-start'>
                <h1 className='text-2xl font-roboto text-black font-semibold drop-shadow-md'>Contact</h1>
                <p className='text-xl font-roboto text-black mt-5 flex items-center gap-2'><span><MdAddCall /></span>01788829796</p>
                <p className='text-xl font-roboto text-black flex items-center gap-2'><span><MdEmail /></span>Info@gmail.com</p>
                <p className='text-xl font-roboto text-black flex items-center gap-2'><span><SiMinutemailer /></span>Kalukali South</p>
            
              
            </div>
            
        </div>
        <div className='flex justify-between items-center mt-10'> 
            <p className='font-roboto text-xs'> 2024 Developed By <span className='text-red-600 drop-shadow-md'>Notex </span> Team</p>
            <p className='font-roboto text-xs'>&copy; 2024 Medilabs Hospitals.com</p>
            </div>
      </div>
    );
};

export default Footer;