
import Slider from "./_components/slider";

const LandingPage = () => {
  return (<>

    {/* Hero Section */}

   {/* <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="./truck.jpg" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#860764]">Safe. Reliable. On Time. 
        <br className="hidden lg:inline-block" />Every Time.
      </h1>
      <p className="mb-8 leading-relaxed w-[500px]">"Reliable transport solutions delivering safety, speed, and efficiency. We move your world with care, precision, and on-time service." </p>
    </div>
  </div>
</section> */}

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 mt-24 m-24 md:flex-row flex-col items-center">
    {/* Image Section */}
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-6 md:mb-0">
      <img className="object-cover object-center rounded max-w-full h-auto" alt="hero" src="./truck.jpg" />
    </div>
    
    {/* Text Content */}
    <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-[#860764]">
        Safe. Reliable. On Time. 
        <br className="hidden lg:inline-block" />Every Time.
      </h1>
      <p className="mb-6 leading-relaxed max-w-md">
        "Reliable transport solutions delivering safety, speed, and efficiency. We move your world with care, precision, and on-time service."
      </p>
    </div>
  </div>
</section>






    <h1 className="text-center text-3xl text-white font-bold mt-[-80px] mb-5 bg-[#860764] py-2">Our Transporters </h1>
    <Slider/> 

    {/* Our Journy */}

    <div className="mt-8">
      <h1 className="text-center text-white text-3xl font-bold bg-[#860764] py-2">Our Journy </h1>

     <section className="text-gray-600 mt-[-80px] lg:ml-44 md:ml-10">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#860764] inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-[#860764] mb-1 tracking-wider">2021</h2>
            <p className="leading-relaxed">We Start Our Journy </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#860764] inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-[#860764] mb-1 tracking-wider">STEP 2</h2>
            <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#860764] inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <circle cx={12} cy={5} r={3} />
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-[#860764] mb-1 tracking-wider">STEP 3</h2>
            <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#860764] inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-[#860764] mb-1 tracking-wider">STEP 4</h2>
            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#860764] inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-[#860764] mb-1 tracking-wider">FINISH</h2>
            <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
          </div>
        </div>
      </div>
      <img className="lg:w-[500px] md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 lg:ml-24 md:ml-10" src="./full-logo.png" alt="step" />
    </div>
  </div>
</section>

    </div>


    {/* users */}

    <section className="text-gray-600 body-font mt-[-150px] lg:ml-60 md:ml-20">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">

  <div className="lg:w-[400px] md:w-[100px] w-full  overflow-hidden lg:ml-0  md:ml-56  justify-items-center">
      <img className="object-cover object-center lg:w-full h-full md:w-1/2  " src="./delivery.jpeg" alt="stats" />
    </div>


    <div className="flex flex-wrap  mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="title-font font-medium text-xl mb-2 text-[#860764]">We Have the Trustable User With Us</h1>
        <div className="leading-relaxed">We Have Our User All Over The India And They Can User Our Services Safly an Trustly</div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-[#860764]">1000+</h2>
        <p className="leading-relaxed">Users</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-[#860764]">100+</h2>
        <p className="leading-relaxed">Citys</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-[#860764]">50+</h2>
        <p className="leading-relaxed">companys</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-[#860764]">500+</h2>
        <p className="leading-relaxed">Products</p>
      </div>
    </div>
    
  </div>
</section>


    </>);
};

export default LandingPage;
