// import { useState } from "react";
// import Slider from "react-slick";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import "./carousel.module.css"

// import astronaut from "../assets/astronaut.png";
// import celebrating from "../assets/celebrating.png";
// import education from "../assets/education.png";
// import taken from "../assets/taken.png";

// const images = [astronaut, celebrating, education, taken];
// function Carousel() {
//   const NextArrow = ({ onClick }) => {
//     return (
//       <div className="bg-white absolute cursor-pointer z-10 right-0 top-1/2" onClick={onClick}>
//         <FaArrowRight />
//       </div>
//     );
//   };

//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div className="bg-white absolute cursor-pointer z-10 left-0 top-1/2" onClick={onClick}>
//         <FaArrowLeft />
//       </div>
//     );
//   };

//   const [imageIndex, setImageIndex] = useState(0);

//   const settings = {
//     infinite: true,
//     lazyLoad: true,
//     speed: 300,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: 0,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (current, next) => setImageIndex(next),
//   };

//   return (
//     <div className="w-1/2 mx-40 my-auto h-[570px]">
//       <Slider {...settings}>
//       {images.map((img, idx) => (
//           <div className={idx === imageIndex ? "transition-transform opacity-100 scale-110 " : "scale-50 transition-transform opacity-50"}>
//             <img className="w-80 h-80 mx-0 my-auto" src="https://github.com/chrisdesilva/3d-slider/blob/main/src/assets/taken.png?raw=true" alt={img} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Carousel;

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class CenterMode extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 3,
//       speed: 500
//     };
//     return (
//       <div>
//         <h2>Center Mode</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const tooglesGroupId = 'Toggles';
const valuesGroupId = 'Values';
const mainGroupId = 'Main';

const getConfigurableProps = () => ({
  showArrows: false,
  showStatus:false, 
  showIndicators: true,
  infiniteLoop:true,
  showThumbs:false,
  useKeyboardArrows: false,
  autoPlay: true,
  stopOnHover: false,
  swipeable: false
  

});

export default function MyCarousel(){
        return (
            <Carousel {...getConfigurableProps()}>
                <div className=' bg-black w-[90%] h-80 mx-auto mt-40 my-20'></div>
                <div className=' bg-indigo-800 w-[90%] h-80 mx-auto mt-40 my-20'></div>
                <div className=' bg-yellow-900 w-[90%] h-80 mx-auto mt-40 my-20'></div>
                <div className=' bg-red-900 w-[90%] h-80 mx-auto mt-40 my-20'></div>
                
            </Carousel>
        );
    }
