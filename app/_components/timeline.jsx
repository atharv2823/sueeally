
export default function TransportTimeline() {
    const timelineData = [
      {
        year: "2021",
        title: "Established in 2021",
        desc: "we have grown into a trusted name in the transport industry.",
        icon: "🚛",
      },
      {
        year: "2022",
        title: "Expanded Fleet",
        desc: " Goverment Recognised",
        icon: "🚚",
      },
      {
        year: "2023",
        title: "Nationwide Coverage",
        desc: "Expanded Business over PAN INDIA .",
        icon: "🗺️",
      },
      {
        year: "2024",
        title: "Financial Growth",
        desc: "Funded By Aban Technology.",
        icon: "💵",
      },
      {
        year: "2025",
        title: "Well Growing",
        desc: "Delivering the best Solutions For the Transportations . ",
        icon: "📈",
      },
    ];
  
    return (
      <div className=" bg-gray-100 flex justify-center">
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
  
  