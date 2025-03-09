import RotatingText from "../_components/rotating";

function page() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#860764]">
              Our Services
            </h1>

            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Reliable and efficient transport solutions tailored to your needs.
              From freight logistics to express deliveries, we ensure safe,
              timely, and cost-effective transportation. Whether local or
              long-distance, our expert team guarantees seamless service,
              connecting businesses and individuals with trusted logistics. Your
              journey, our commitment—because every mile matters!
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div>
              <h1 className="text-2xl font-bold me-2 text-[#860764]">
                We Can Transport
              </h1>
            </div>

            <div>
              <RotatingText
                texts={[
                  "Heavy Machines",
                  "Iron Poles",
                  "Industrial Load ",
                  "Any Thing You Want!",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#860764] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>

          <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "Project Logistics",
          subtitle: "PAN India",
          description: "We Provide All India Service",
          image: "./s-1.jpeg",
        },
        {
          title: "ODC, SODC, OWC",
          subtitle: "Specialist",
          description: "Best Service In All Kind",
          image: "./s-2.webp",
        },
        {
          title: "Part Load Services",
          subtitle: "PAN India",
          description: "All Type Of Load",
          image: "./s-4.jpg",
        },
        {
          title: "Road Transportation",
          subtitle: "PAN India",
          description: "Trailers, Taurus, LPT, JCB, MXL",
          image: "./s-3.jpg",
        },
      ].map((item, index) => (
        <div key={index} className="p-4">
          <div className="h-full flex flex-col sm:flex-row items-center sm:items-start border-2 border-[#860764] rounded-lg px-4 py-4">
            <img
              alt={item.title}
              className="flex-shrink-0 rounded-lg w-48 h-48 object-contain mb-4 sm:mb-0"
              src={item.image}
            />
            <div className="flex-grow sm:pl-6 text-center sm:text-left">
              <h2 className="title-font font-medium text-lg text-gray-900">{item.title}</h2>
              <h3 className="text-gray-500 mb-3">{item.subtitle}</h3>
              <p className="mb-4">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        </div>
      </section>
    </>
  );
}

export default page;
