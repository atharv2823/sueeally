
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const scaleIn = {
  hidden: { scale: 0 },
  visible: { scale: 1 }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function founder() {
  // Inside the AboutPage component, add this section before the Testimonial section

  // First, make sure we're properly using the hooks from React and Framer Motion

  const founderRef = useRef(null);
  const founderImageRef = useRef(null);
  const founderInView = useInView(founderRef, { once: true, amount: 0.3 });
  const founderImageInView = useInView(founderImageRef, {
    once: true,
    amount: 0.5,
  });

  // Then add this section before the Testimonial section
  return (
    <>
      {/* Founder Profile Section */}
      <motion.div
        ref={founderRef}
        className="mb-16 bg-white rounded-lg shadow-md p-8 overflow-hidden"
        initial="hidden"
        animate={founderInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-2xl text-[#860764] font-bold mb-6 text-center"
          variants={fadeIn}
        >
          Meet Our Founder
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="relative w-64 h-64 mx-auto md:mx-0"
            ref={founderImageRef}
            initial="hidden"
            animate={founderImageInView ? "visible" : "hidden"}
            variants={scaleIn}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="https://media.licdn.com/dms/image/v2/D5603AQEydUQcVWnytg/profile-displayphoto-shrink_800_800/B56ZTuMrqmGoAg-/0/1739163092371?e=1747872000&v=beta&t=uM45ghSSRQWrE9uWQAwi-Ckur-ejj5e6O2d_yqds_jk"
              alt="Founder"
              className="w-full h-full object-cover rounded-full border-4 border-[#860764] shadow-xl"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
            <motion.div
              className="absolute -bottom-3 -right-3 w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-[#860764]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="text-[#860764] font-bold text-sm">Founder</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 mt-6 md:mt-0"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <motion.h2
              className="text-xl text-[#860764] font-semibold mb-2"
              variants={fadeIn}
            >
              Sandip Hatwar
            </motion.h2>

            <motion.div
              className="w-20 h-1 bg-[#860764] rounded mb-4"
              initial={{ width: 0 }}
              animate={founderInView ? { width: "5rem" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />

            <motion.p className="text-gray-700 mb-6">
              With over 19 years of experience in logistics and supply chain
              management, Sandip Hatwar founded SueeAlly Private Limited in 2021
              with a vision to revolutionize the logistics industry in India.
              His expertise in project logistics and commitment to customer
              satisfaction has driven the company's rapid growth and established
              SueeAlly as a trusted name in transportation services across India
              and neighboring countries.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
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
                  icon: "LinkedIn",
                  url: "https://www.linkedin.com/in/sandip-hatwar-96b539180/",
                },
                // { icon: "Twitter", url: "https://twitter.com/rajeshkumar" },
                { icon: "Instagram", url: "https://instagram.com/rajeshkumar" },
                { icon: "Email", url: "mailto:rajesh@sueeallylogistics.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-[#860764] flex items-center justify-center text-white hover:bg-[#6b044d] transition-colors"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {social.icon === "LinkedIn" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                    </svg>
                  )}
                  {social.icon === "Twitter" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.899a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  )}
                  {social.icon === "Instagram" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social.icon === "Email" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                    </svg>
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={listVariants}
          transition={{ delay: 0.7 }}
        >
          {[
            { label: "Years in Industry", value: "19+" },
            { label: "Projects Delivered", value: "500+" },
            { label: "Team Size", value: "50+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-4 rounded-lg text-center border border-[#860764] shadow-sm"
              variants={listItemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                borderColor: "#6b044d",
              }}
            >
              <h3 className="text-3xl font-bold text-[#860764]">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

export default founder