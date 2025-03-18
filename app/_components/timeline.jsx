// export default function TransportTimeline() {
//     const timelineData = [
//       { year: "2018", title: "Company Founded", desc: "Started with a vision to revolutionize transport services.", icon: "M12 2L2 7l10 5 10-5z M2 17l10 5 10-5 M2 12l10 5 10-5" },
//       { year: "2019", title: "Expanded Fleet", desc: "Added more vehicles to meet growing demand.", icon: "M12 2L2 7l10 5 10-5z M2 17l10 5 10-5" },
//       { year: "2021", title: "Nationwide Coverage", desc: "Expanded operations across multiple states.", icon: "M12 2L2 7l10 5 10-5z M2 17l10 5 10-5" },
//       { year: "2023", title: "Smart Tracking System", desc: "Implemented real-time tracking for better efficiency.", icon: "M12 2L2 7l10 5 10-5z M2 17l10 5 10-5" },
//       { year: "2025", title: "Green Transport", desc: "Introduced electric vehicles to reduce carbon footprint.", icon: "M12 2L2 7l10 5 10-5z M2 17l10 5 10-5" }
//     ];
  
//     return (
//       <div className="py-12 bg-gray-100">
//         <h1 className="text-center text-4xl font-bold text-[#860764] mb-10">Our Journey</h1>
//         <div className="container mx-auto px-6 flex flex-col items-center relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#860764] h-full"></div>
//           {timelineData.map((item, index) => (
//             <div key={index} className={`w-full md:w-2/3 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-10 relative`}>            
//               <div className="w-1/2 p-4 z-10">
//                 <h2 className="text-xl font-bold text-[#860764]">{item.year} - {item.title}</h2>
//                 <p className="text-gray-700">{item.desc}</p>
//               </div>
//               <div className="w-1/2 flex justify-center relative">
//                 <div className="w-12 h-12 rounded-full bg-[#860764] flex items-center justify-center text-white shadow-lg relative z-10">
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }



export default function TransportTimeline() {
    const timelineData = [
      { year: "2021", title: "Established in 2021", desc: "we have grown into a trusted name in the transport industry.", icon: "🚛" },
      { year: "2022", title: "Expanded Fleet", desc: " Company Get Certified DIPP Start up.", icon: "🚚" },
      { year: "2023", title: "Nationwide Coverage", desc: "Expanded Business over PAN INDIA .", icon: "🗺️" },
      { year: "2024", title: "Financial Growth", desc: "Funded By Aban Technology.", icon: "📡" },
      { year: "2025", title: "Green Transport", desc: "Introduced electric vehicles to reduce carbon footprint.", icon: "♻️" }
    ];
  
    return (
      <div className="py-12 bg-gray-100 flex justify-center">
        <div className="w-full md:w-2/3">
          {/* <h1 className="text-center text-4xl font-bold text-[#860764] mb-10">Our Journey</h1> */}
          <div className="container mx-auto px-6 relative">
            {/* Vertical Line */}
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#860764] h-full"></div> */}
    
            {/* Timeline Events */}
            {timelineData.map((item, index) => (
              <div key={index} className={`w-full flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-10 relative`}>
                
                {/* Text Content */}
                <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg z-10 transition-transform transform hover:scale-105">
                  <h2 className="text-xl font-bold text-[#860764]">{item.year} - {item.title}</h2>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
    
                {/* Icon Container */}
                <div className="w-1/2 flex justify-center relative">
                  <div className="w-14 h-14 rounded-full bg-[#860764] flex items-center justify-center text-white text-2xl shadow-lg transform transition-transform hover:rotate-12">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  