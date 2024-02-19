
import bio from '../../../../public/Biography/Vaccination research - 640x541 1.png'
const Biography = () => {
    return (
        <div className='flex justify-center lg:flex-row flex-col items-center lg:mt-40'>
            <div className=''>
        <img className='lg:w-[972px] lg:h-[678px]' src={bio} alt="" />
            </div>
            <div className='lg:w-[573px]'>
        <h3 className='font-roboto text-xl text-[#000]'>Biography</h3>
        <h1 className='text-3xl font-roboto mt-5 '>Who We Are</h1>
        <p className='text-xl font-roboto mt-5'>Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience in real time.

Its 2019: time to sink or swim.

We are your Social Media Marketing Agency.</p>
<button className="px-6 py-2 bg-[#9083D5] text-xl font-roboto font-semibold text-white rounded-xl mt-5">See More</button>
            </div>

        </div>
    );
};

export default Biography;