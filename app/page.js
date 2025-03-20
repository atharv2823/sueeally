
"use client"
import { useState, useEffect } from "react";
import DecryptedText from "./_components/herotext";
import RotatingText from "./_components/rotating";
import Slider from "./_components/slider";
import TransportTimeline from "./_components/timeline";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    transport: false,
    slider: false,
    journey: false,
    stats: false,
  });

  useEffect(() => {
    // Set each section to visible with a delay
    const timers = [
      setTimeout(() => setIsVisible((prev) => ({ ...prev, hero: true })), 100),
      setTimeout(
        () => setIsVisible((prev) => ({ ...prev, transport: true })),
        600
      ),
      setTimeout(
        () => setIsVisible((prev) => ({ ...prev, slider: true })),
        1000
      ),
      setTimeout(
        () => setIsVisible((prev) => ({ ...prev, journey: true })),
        1400
      ),
      setTimeout(
        () => setIsVisible((prev) => ({ ...prev, stats: true })),
        1800
      ),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Counter animation for stats
  const CounterAnimation = ({ end, title }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible.stats) {
        let startTime;
        const duration = 2000; // 2 seconds

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const percentage = Math.min(progress / duration, 1);

          setCount(Math.floor(percentage * end));

          if (percentage < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    }, [isVisible.stats, end]);

    return (
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-[#860764]">
          {count}+
        </h2>
        <p className="leading-relaxed">{title}</p>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section with animations */}
      <motion.section
        className="text-gray-600 body-font overflow-hidden "
        initial="hidden"
        animate={isVisible.hero ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container mx-auto flex px-5 pt-32 pb-24 md:flex-row flex-col items-center">
          {/* Image Section with hover effect */}
          <motion.div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-full md:mb-0 relative"
            variants={fadeInUp}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#860764]/30 to-transparent rounded opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <img
              className="object-cover object-center rounded shadow-xl max-w-full h-auto"
              alt="hero"
              src="./truck.jpg"
            />
          </motion.div>

          {/* Text Content with staggered animation */}
          <motion.div
            className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center"
            variants={fadeInUp}
          >
            <motion.h1
              className="title-font sm:text-5xl text-3xl mb-4 font-bold text-[#860764]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <DecryptedText text="Safe. Reliable. On Time." />
              <br className="hidden lg:inline-block" />
              <span className="relative">
                Every Time.
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#860764] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              </span>
            </motion.h1>

            <motion.p
              className="leading-relaxed max-w-md  text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Reliable & Efficient Transport Services
              <br />
              Welcome to <strong>SueeAlly Private Limited</strong>, your trusted
              partner in transportation. We provide safe, timely, and
              cost-effective transport solutions tailored to your needs.
              <br />
              <br />
              <span className="italic">
                Ride with confidence. Ship with ease.
              </span>
            </motion.p>

            {/* <motion.button
              className="inline-flex text-white bg-[#860764] border-0 py-2 px-6 focus:outline-none hover:bg-[#6b0450] rounded-lg text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Contact Us Today
            </motion.button> */}
          </motion.div>
        </div>

        {/* We Can Transport Section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center mb-16 text-center sm:text-left"
          initial="hidden"
          animate={isVisible.transport ? "visible" : "hidden"}
          variants={scaleUp}
        >
          <h1 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-0 sm:me-3 text-[#860764]">
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
            mainClassName="px-4 sm:px-5 md:px-6 bg-[#860764] text-white overflow-hidden py-2 sm:py-3 md:py-3 font-bold justify-center rounded-lg shadow-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1 sm:pb-1.5 md:pb-2"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.div>
      </motion.section>

      {/* Our Transportation Section */}
      <motion.div
        initial="hidden"
        animate={isVisible.slider ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-12 bg-gray-50"
      >
        <motion.h1
          className="text-center text-3xl text-white font-bold mb-10 bg-[#860764] py-3 shadow-md"
          variants={fadeInUp}
        >
          Our Transportation Fleet
        </motion.h1>
        <Slider />
      </motion.div>

      {/* Our Journey */}
      <motion.div
        className="mt-16 mb-20"
        initial="hidden"
        animate={isVisible.journey ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <motion.h1
          className="text-center text-white text-3xl font-bold bg-[#860764] py-3 mb-10 shadow-md"
          variants={fadeInUp}
        >
          Our Journey
        </motion.h1>

        <TransportTimeline />
      </motion.div>

      {/* Stats Section */}
      <motion.section
        className="text-gray-600 body-font py-16 bg-gray-50"
        initial="hidden"
        animate={isVisible.stats ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container px-5 mx-auto flex flex-wrap items-center">
          <motion.div
            className="lg:w-1/3 md:w-1/2 w-full overflow-hidden flex justify-center mb-10 md:mb-0"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img
              className="object-cover object-center w-3/4 md:w-full max-w-md rounded-lg shadow-xl"
              src="./delivery.png"
              alt="stats"
            />
          </motion.div>

          <motion.div
            className="flex flex-wrap lg:w-2/3 md:w-1/2 pl-0 md:pl-10"
            variants={fadeInUp}
          >
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-bold text-2xl mb-3 text-[#860764]">
                Trusted by Clients All Over India
              </h1>
              <div className="leading-relaxed text-lg">
                Our services extend across the nation, offering reliable and
                safe transportation solutions for businesses of all sizes. Join
                our growing network of satisfied customers.
              </div>
            </div>

            <div className="flex flex-wrap w-full">
              <CounterAnimation end={2400} title="Trips Completed" />
              <CounterAnimation end={100} title="Cities Served" />
              <CounterAnimation end={50} title="Partner Companies" />
              <CounterAnimation end={500} title="Products Transported" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      {/* <motion.section
        className="text-gray-600 body-font"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.7 }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#860764]">
              Ready to Ship with SueeAlly?
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Get in touch with our logistics experts for a free consultation
              and quote. We'll help you find the perfect transport solution for
              your needs.
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#860764] focus:bg-white focus:ring-2 focus:ring-[#860764] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-[#860764] border-0 py-2 px-8 focus:outline-none hover:bg-[#6b0450] rounded text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </motion.section> */}
    </>
  );
};

export default LandingPage;


