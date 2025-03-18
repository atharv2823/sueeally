import DecryptedText from "./_components/herotext";
import RotatingText from "./_components/rotating";
import Slider from "./_components/slider";
import TransportTimeline from "./_components/timeline";

const LandingPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 mt-24 m-24 md:flex-row flex-col items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full  md:mb-0">
            <img
              className="object-cover object-center rounded max-w-full h-auto"
              alt="hero"
              src="./truck.jpg"
            />
          </div>

          {/* Text Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-2xl  font-medium text-[#860764]">
              Safe. Reliable. On Time.
              <br className="hidden lg:inline-block" />
              Every Time.
            </h1>
            <p className=" leading-relaxed max-w-md">
              "Reliable & Efficient Transport Services
              <br />
              Welcome to <strong>SueeAlly Private Limited</strong>, your trusted
              partner in transportation. We provide safe, timely, and
              cost-effective transport solutions tailored to your needs. Whether
              it's cargo delivery, logistics support, our professional team
              ensures a seamless experience from start to finish.
              <br />
              Ride with confidence. Ship with ease.
              <br />
              <strong>Contact us today to get started!</strong>"
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center mb-10 text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0 sm:me-2 text-[#860764]">
            We Can Transport
          </h1>

          <RotatingText
            texts={[
              "HEAVY STEEL STRUCTURE",
              "SOLAR PUMP",
              "STEEL RAW MATERIAL",
              "COILS",
              "HEAVY MACHINERY",
              "PEB STRUCTURE",
              "CNG CASCADE",
              "INDUSTRIAL IMPORT MATERIALS",
              "WIRES",
              "CRANES",
              "Any Thing You Want!",
            ]}
            mainClassName="px-2 sm:px-3 md:px-4 bg-[#860764] text-white overflow-hidden py-1 sm:py-2 md:py-2 font-bold justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1 sm:pb-1.5 md:pb-2"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </section>

      <h1 className="text-center text-3xl text-white font-bold mt-[-20px] mb-5 bg-[#860764] py-2">
      Our Transportation
      </h1>
      <Slider />

      {/* Our Journey */}

      <div className="mt-8">
        <h1 className="text-center text-white text-3xl font-bold bg-[#860764] py-2">
          Our Journey
        </h1>

        <TransportTimeline />
      </div>

      <section className="text-gray-600 body-font mt-[-90px] lg:ml-60 md:ml-20">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-[400px] md:w-[100px] w-full  overflow-hidden lg:ml-0  md:ml-56  justify-items-center">
            <img
              className="object-cover object-center lg:w-full h-full md:w-1/2  "
              src="./delivery.png"
              alt="stats"
            />
          </div>

          <div className="flex flex-wrap  mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-[#860764]">
                We Have the Trustable User With Us
              </h1>
              <div className="leading-relaxed">
                We Have Our User All Over The India And They Can User Our
                Services Safly an Trustly
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-[#860764]">
                2400+
              </h2>
              <p className="leading-relaxed">Trips</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-[#860764]">
                100+
              </h2>
              <p className="leading-relaxed">Citys</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-[#860764]">
                50+
              </h2>
              <p className="leading-relaxed">companys</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-[#860764]">
                500+
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
