

"use client"

import RotatingText from "../_components/rotating";
import { motion } from "framer-motion";

function Page() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <motion.div
            className="flex flex-col text-center w-full mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#860764] drop-shadow-md">
              Our Services
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Reliable and efficient transport solutions tailored to your needs.
              From freight logistics to express deliveries, we ensure safe,
              timely, and cost-effective transportation. Your journey, our
              commitment—because every mile matters!
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center mb-10 text-center sm:text-left"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
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
              mainClassName="px-3 bg-[#860764] text-white py-2 font-bold rounded-lg shadow-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-2"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Project Logistics",
                    subtitle: "PAN India",
                    description:
                      "We provide logistics support for heavy-lift and capital projects.",
                    image: "./p-10.jpg",
                  },
                  {
                    title: "ODC, SODC, OWC",
                    subtitle: "Specialist",
                    description:
                      "Expert transport specialists for oversized cargo handling.",
                    image: "./s-2.webp",
                  },
                  {
                    title: "Road Transportation",
                    subtitle: "PAN India",
                    description:
                      "Comprehensive transport services including trailers, Taurus, JCB, and more.",
                    image: "./p-11.jpg",
                  },
                  {
                    title: "Crane Rental",
                    subtitle: "PAN India",
                    description:
                      "We have truck-mounted and all-terrain telescopic Boom lifter,Farana hydra,Tyre mounted cranes ranging from 20 MT to 350 MT in all configurations including main boom, fix jib, runner, luffing and derrick attachments.",
                    image: "./crane.jpg",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="h-full flex flex-col sm:flex-row items-center sm:items-start border-2 border-[#860764] rounded-lg px-6 py-6 shadow-md bg-white">
                      <img
                        alt={item.title}
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover mb-4 sm:mb-0 shadow-md"
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
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Page;
