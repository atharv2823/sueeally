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

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Project Logistics",
                    subtitle: "PAN India",
                    description: "We provide logistics support that includes heavy-lift and out-of-gauge cargo moves for capital projects, plants and machinery, equipments for oil & gas plants etc.",
                    image: "./p-10.jpg",
                  },
                  {
                    title: "ODC, SODC, OWC",
                    subtitle: "Specialist",
                    description: "SueeAlly Transport Specialists are trained, experienced professionals with years of enforcement and corrections experience.",
                    image: "./s-2.webp",
                  },
                  {
                    title: "Part Load Services",
                    subtitle: "PAN India",
                    description: "SueeAlly's cost-effective Part Load Services recently started from Nagpur to PAN India.",
                    image: "./p-14.jpg",
                  },
                  {
                    title: "Road Transportation (Trailers, Taurus, LPT, JCB, SXL, MXL, etc)",
                    subtitle: "PAN India",
                    description: "We have served every transportation need of our clients with professionalism, promptness, customized and excellent services with ease.  ",
                    image: "./p-16.jpg",
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
                        <h2 className="title-font font-medium text-lg text-gray-900">
                          {item.title}
                        </h2>
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
