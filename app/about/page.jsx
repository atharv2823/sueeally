
"use client"

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Testimonial from "../_components/testimonial";
import Founder from "../_components/founder";

function AboutPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  // Referen for scroll animations
  const certificateRef = useRef(null);
  const companyInfoRef = useRef(null);
  const descriptionRef = useRef(null);
  const whyChooseRef = useRef(null);
  const clientsRef = useRef(null);

  // InView hooks
  const certificateInView = useInView(certificateRef, {
    once: true,
    amount: 0.5,
  });
  const companyInfoInView = useInView(companyInfoRef, {
    once: true,
    amount: 0.5,
  });
  const descriptionInView = useInView(descriptionRef, {
    once: true,
    amount: 0.3,
  });
  const whyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.5 });
  const clientsInView = useInView(clientsRef, { once: true, amount: 0.2 });

  return (
    <>
      <motion.h1
        className="font-bold text-4xl text-[#860764] mt-24 mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Company
      </motion.h1>
      {/* Company Description */}
      <motion.div
        ref={descriptionRef}
        className="p-6 mb-10 bg-gray-50 rounded-lg"
        initial="hidden"
        animate={descriptionInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-[#860764] text-lg mb-2"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          SueeAlly Private Limited is one of the Leading Logistics service
          providers in India. SueeAlly provides end-to-end logistic solutions to
          the specific needs of its prestigious customers, aiming to branch out
          into allied businesses in India.
          <br />
          <br />
          SueeAlly handles logistics of all sizes and weights of cargo like
          large equipment, automobiles, heavy machinery. We can deliver cargo
          from any location in India to anywhere in India, Bhutan, Nepal,
          Bangladesh.
        </motion.p>

        <motion.p
          className="text-[#860764] text-lg"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          Government Recognized Startup SueeAlly has grown rapidly since its
          inception from 2021, we have kept pace with our customers, working
          together to provide solutions to our customers, meeting all their
          requirements in Road Transportation, Project Logistics, ODC & Part
          Load movement etc. The team of young, enthusiastic, experienced, and
          committed professionals helps us ensure full service to our customers
          with the highest confidence.
          <br />
          <br />
          With the rapid development in recent years, SueeAlly is known as one
          of the dynamic companies active in the field of LOGISTICS services.
          The company has consistently improved the quality of services to meet
          the increasing requirements of our customers.
        </motion.p>
      </motion.div>

      {/* Title with animation */}
      {/* <motion.h1
        className="font-bold text-4xl text-[#860764] mt-24 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Company
      </motion.h1> */}

      {/* Certificate Section */}
      <div ref={certificateRef} className="flex flex-col items-center mb-10">
        <motion.div
          className="relative"
          initial="hidden"
          animate={certificateInView ? "visible" : "hidden"}
          variants={scaleIn}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-xl text-[#860764] mt-4 font-semibold text-center mb-6"
            initial={{ opacity: 0 }}
            animate={certificateInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Certified Transporter
          </motion.p>

          <motion.img
            src="./certificate.png"
            alt="certificate"
            className="w-[500px] mx-auto border-[5px] border-black rounded-lg shadow-xl"
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          />
          <motion.div
            className="absolute -bottom-2 -right-2 w-full h-full  rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Company Information */}
      <div ref={companyInfoRef} className="mb-2  ">
        <motion.div
          initial="hidden"
          animate={companyInfoInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <motion.h2
            className="text-[#860764] text-2xl text-center font-semibold mb-2"
            variants={fadeIn}
          >
            (CIN : U60230MH2021PTC373621)
          </motion.h2>

          <motion.div
            className="w-40 h-1 bg-[#860764] rounded mb-4"
            initial={{ width: 0 }}
            animate={companyInfoInView ? { width: "10rem" } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          <motion.h2
            className="text-[#860764] text-2xl text-center font-semibold"
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            (GSTIN : 27ABHCS5267N1ZL)
          </motion.h2>
        </motion.div>
      </div>

      <div>
        <Founder />
      </div>

      {/* Why Choose Us */}
      <motion.div
        ref={whyChooseRef}
        className="mb-16 bg-white rounded-lg shadow-md p-8"
        initial="hidden"
        animate={whyChooseInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-2xl text-[#860764] font-bold mb-6"
          variants={fadeIn}
        >
          Why Choose Us?
        </motion.h1>

        <motion.ul
          className="mt-4 list-none ml-4 text-[#860764]"
          variants={listVariants}
        >
          {[
            "Dedicated Team of Logistics Professionals",
            "Project Logistics PAN India",
            "Cost Effective",
            "Daily Status Report with Time Bound Delivery",
            "Hands-on Experience Technology",
            "Responsive-Coordination",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="mb-3 flex items-center text-lg"
              variants={listItemVariants}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <span className="inline-block w-6 h-6 mr-3 bg-[#860764] rounded-full  items-center justify-center text-white">
                ✓
              </span>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Our Clients */}
      <motion.div
        ref={clientsRef}
        initial="hidden"
        animate={clientsInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <section className="text-gray-600 mt-5">
          <div className="container mx-auto">
            <motion.div
              className="flex flex-col text-center w-full mb-12"
              variants={fadeIn}
            >
              <motion.h1
                className="sm:text-3xl text-2xl w-full bg-[#860764] font-bold mb-2 text-white py-2 rounded-md shadow-md"
                variants={fadeIn}
              >
                Our Major Clients
              </motion.h1>
              <motion.div
                className="w-24 h-1 bg-[#860764] rounded mx-auto mt-4"
                initial={{ width: 0 }}
                animate={clientsInView ? { width: "6rem" } : { width: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.div>

            <motion.div
              className="flex flex-wrap px-5"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {[
                {
                  name: "Tata Project Ltd",
                  logo: "https://www.thestatesman.com/wp-content/uploads/2021/08/tata.jpg",
                },
                {
                  name: "L&T",
                  logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFnEYpR8MlYsA/company-logo_200_200/company-logo_200_200/0/1631300737623?e=2147483647&v=beta&t=vBpiSnTnkV24odzkPx99lZx-rchLPHjoWsjTTpWXPro",
                },
                {
                  name: "ZETWERK Manufacturing Business Pvt",
                  logo: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-8798,resizemode-75,msid-109184977/tech/startups/zetwerk-earmarks-rs-1000-crore-investments-to-grow-its-electronics-business.jpg",
                  isWide: true,
                },
                {
                  name: "Interarch Building Products Limited",
                  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtu2PA6T74285JuZlGxWLwyb9qeoXvJiTphmcIDKqaU9mNDIU93sZIlu422G3LmYGpA0k&usqp=CAU",
                },
                {
                  name: "BMW Industries Limited",
                  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxAi4XzEzhKHhmbv0zF-HJdi0aVpOUjeu2eGLSOaG5ER3GqUmEqei1jZ8hNGLDoCo_qc&usqp=CAU",
                },
                {
                  name: "Rite Water Solution ( I ) Pvt Ltd",
                  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXFS1c44u5hwaFexecD5Stf3AQ3EV9_X3kQ&s",
                },
                {
                  name: "Confidence Petroleum India Ltd",
                  logo: "https://www.confidencegroup.co/assets_new/images/cpil-logo.png",
                  isWide: true,
                },
                {
                  name: "MOGLI LABS (INDIA) PRIVATE LIMITED",
                  logo: "https://play-lh.googleusercontent.com/2ij3bSlajLxBLfCFnw9Yr_zTGjMUY4ue6T-tInBUtH4HUS-GijFZ6JPN6ZlKyrfw42w",
                },
                {
                  name: "PEB BlueLadder EPC Solutions Private Limited",
                  logo: "https://www.blueladderepc.com/wp-content/uploads/2023/02/Blue-Ladder-LOGO-1.png",
                },
                {
                  name: "ISB Infrastructure",
                  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4YhXtDh40hJQJm301V-dj6Y6cEtFLv9HMS4fc9xgewPPjPZ71jMOU09OUmxVGuzDpjg&usqp=CAU",
                },
                {
                  name: "Luk plastcon",
                  logo: "https://lukplastcon.com/wp-content/uploads/2024/01/cropped-WhatsApp_Image_2024-01-15_at_5.13.24_AM-removebg-preview.png",
                },
                {
                  name: "DUROPLY industries",
                  logo: "https://images.jdmagicbox.com/comp/hyderabad/p7/040pxx40.xx40.210307232516.k7p7/catalogue/duroply-industries-limited-secunderabad-city-secunderabad-plywood-dealers-k9gdxu2f2b.jpg",
                },
              ].map((client, index) => (
                <motion.div
                  key={index}
                  className="p-2 lg:w-1/3 md:w-1/2 w-full"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <motion.div
                    className="h-full flex items-center border-[#860764] border p-4 rounded-lg bg-white shadow-sm"
                    whileHover={{
                      scale: 1.03,
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      borderColor: "#6b044d",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      alt={client.name}
                      className={`${
                        client.isWide ? "w-28" : "w-16"
                      } h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4`}
                      src={client.logo}
                    />
                    <div className="flex-grow">
                      <h2 className="text-gray-900 title-font font-medium">
                        {client.name}
                      </h2>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Testimonial />
      </motion.div>
    </>
  );
}

export default AboutPage;