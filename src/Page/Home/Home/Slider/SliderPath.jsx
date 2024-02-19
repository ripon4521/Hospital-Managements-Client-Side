import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SliderPath = () => {
    var settings = {
        dots: true,
     
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        swipeToSlide: true,
          
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    return (
        <div className="container mx-auto lg:-mt-40 md:-mt-20">
          <img className="-z-50 -ml-[500px] w-[600px]  relative" src="../../../../../public/Slider/Vector.png" alt="" />
       <div className="z-50 -mt-[400px] ">
       <Slider {...settings}>
          
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
          <SliderCard></SliderCard>
      </Slider>
        
 
       
       </div>
            
        </div>
    );
};

export default SliderPath;