
"use client"

import { useState, useEffect } from 'react';

const images = [
  "./p-1.png", "./p-2.png", "./p-4.png", "./p-5.png", "./p-7.png", "./p-9.png", "./p-10.jpg", "./p-11.jpg", "./p-12.jpg", "./p-13.jpg", "./p-14.jpg", "./p-15.jpg", "./p-16.jpg ","./p-19.jpg"
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

