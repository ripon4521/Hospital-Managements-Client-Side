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
        <div className="container mx-auto my-20">
            <Slider {...settings}>
          
            <SliderCard></SliderCard>
            <SliderCard></SliderCard>
            <SliderCard></SliderCard>
            <SliderCard></SliderCard>
            <SliderCard></SliderCard>
        </Slider>
          
   
         
            
        </div>
    );
};

export default SliderPath;