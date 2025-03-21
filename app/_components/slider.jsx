// "use client";
// import { useState, useEffect } from "react";

// export default function AutoSlider() {
//   const images = [
//     "./p-1.png", "./p-2.png", "./p-4.png",
//     "./p-5.png", "./p-6.png", "./p-7.png", "./p-9.png", "./p-10.jpg", "./p-11.jpg", "./p-12.jpg", "./p-13.jpg", "./p-14.jpg", "./p-15.jpg", "./p-16.jpg"
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   // Auto-slide every 3 seconds unless paused
//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [currentIndex, isPaused]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-lg mx-auto overflow-hidden">
//       {/* Slider Container */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)`, width: "100%" }}
//       >
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`slide-${index}`}
//             className="w-full h-64 object-cover flex-shrink-0"
//           />
//         ))}
//       </div>

//       {/* Left Button */}
//       <button
//         onClick={() => { prevSlide(); setIsPaused(true); }}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10"
//       >
//         &#10094;
//       </button>

//       {/* Right Button */}
//       <button
//         onClick={() => { nextSlide(); setIsPaused(true); }}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10"
//       >
//         &#10095;
//       </button>

//       {/* Dots for Navigation */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => { setCurrentIndex(index); setIsPaused(true); }}
//             className={`w-3 h-3 rounded-full transition ${
//               currentIndex === index ? "bg-gray-800 scale-125" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client"

import { useState, useEffect } from 'react';

const images = [
  "./p-1.png", "./p-2.png", "./p-4.png", "./p-5.png", "./p-6.png", "./p-7.png", "./p-9.png", "./p-10.jpg", "./p-11.jpg", "./p-12.jpg", "./p-13.jpg", "./p-14.jpg", "./p-15.jpg", "./p-16.jpg"
];

export default function MarqueeSlider() {
  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...images, ...images].map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt="slider-image" 
            className="w-64 h-64 object-contain mx-2 rounded-lg"
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </div>
  );
}






// import { useState, useEffect } from 'react';

// const images = [
//   "./p-1.png", "./p-2.png", "./p-4.png","./p-5.png", "./p-6.png", "./p-7.png", "./p-9.png", "./p-10.jpg", "./p-11.jpg", "./p-12.jpg", "./p-13.jpg", "./p-14.jpg", "./p-15.jpg", "./p-16.jpg"
 
// ];

// export default function MarqueeSlider() {

 
//   return (
//     <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
//       <div className="flex w-full animate-marquee whitespace-nowrap">
//         {images.concat(images).map((image, index) => (
//           <img 
//             key={index} 
//             src={image} 
//             alt="slider-image" 
//             className="w-full h-64 object-contain mx-2 rounded-lg"
//           />
//         ))}
//       </div>
//       <style jsx>{`
//         @keyframes marquee {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           display: flex;
//           animation: marquee 5s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

