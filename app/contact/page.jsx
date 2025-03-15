"use client";

import { useState } from "react";

function page() {
  // const [formData, setFormData] = useState({
  //   to: "", // Recipient Email
  //   subject: "", // Email Subject
  //   text: "", // Message
  // });
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage("");

  //   try {
  //     const response = await fetch("/api/sendEmail", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setMessage("Email sent successfully!");
  //       setFormData({ to: "", text: "" }); // Clear form
  //     } else {
  //       setMessage(data.error || "Failed to send email.");
  //     }
  //   } catch (error) {
  //     setMessage("An error occurred. Try again.");
  //   }

  //   setLoading(false);
  // };

  const [formData, setFormData] = useState({
    from: "",
    subject: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Email sent successfully!");
        setFormData({ from: "", subject: "", text: "" });
      } else {
        setMessage(data.error || "Failed to send email.");
      }
    } catch (error) {
      setMessage("Error sending email. Please try again.");
    }

    setLoading(false);
  };


  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=SueeAlly+Private+Limited,@21.1110109,79.1015343&ie=UTF8&t=&z=18&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          />
        </div>
        
        {/* <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Here You Can Add Your Email Address and Message So We Can Reply !
            </p>
            {message && (
              <p className="mb-2 text-center text-red-500">{message}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative mb-4">
                <label htmlFor="to" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="to"
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label
                  htmlFor="to"
                  className="leading-7 text-sm text-gray-600 mt-2"
                >
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="text"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="text"
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="text-white bg-[#860764] border-0 py-2 px-6 focus:outline-none hover:bg-[#860764] rounded text-lg lg:w-96 md:w-1/2 lg:ml-6 md:ml-0"
              >
                {loading ? "Sending..." : "Send"}
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Trust And Transport !
              </p>
            </form>
          </div>
        </div> */}

<div className="container px-5 py-24 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Contact Us
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Here You Can Add Your Email Address and Message So We Can Reply!
        </p>
        {message && <p className="mb-2 text-center text-red-500">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative mb-4">
            <label htmlFor="from" className="leading-7 text-sm text-gray-600">
              Your Email
            </label>
            <input
              type="email"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="subject" className="leading-7 text-sm text-gray-600">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="text" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="text-white bg-[#860764] border-0 py-2 px-6 focus:outline-none hover:bg-[#860764] rounded text-lg lg:w-96 md:w-1/2 lg:ml-6 md:ml-0"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <p className="text-xs text-gray-500 mt-3">Trust And Transport!</p>
        </form>
      </div>
    </div>


      </section>
    </>
  );
}

export default page;
