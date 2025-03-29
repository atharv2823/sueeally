"use client";

import { useState } from "react";

function page() {
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
      <section className="text-gray-600 body-font relative min-h-screen">
        <div className="absolute inset-0 bg-gray-300 h-[750px]">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Our Presence"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7602557.50520459!2d75.71565725!3d20.98699345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sindia!5e0!3m2!1sen!2sin!4v1683660761731!5m2!1sen!2sin&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-dot.png|label:N|21.1458,79.0882&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-dot.png|label:M|19.0760,72.8777&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-dot.png|label:P|18.5204,73.8567&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-dot.png|label:R|21.2514,81.6296&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-dot.png|label:C|13.0827,80.2707&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-dot.png|label:B|12.9716,77.5946&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-dot.png|label:K|22.5726,88.3639&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-dot.png|label:D|28.6139,77.2090&markers=icon:https://maps.google.com/mapfiles/ms/icons/red-dot.png|label:J|23.1815,79.9864"
            style={{
              filter: "grayscale(1) contrast(1.2) opacity(0.4)",
              width: "100%",
              height: "100%",
              border: "0",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Here You Can Add Your Email Address and Message So We Can Reply!
            </p>
            {message && (
              <p className="mb-2 text-center text-red-500">{message}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative mb-4">
                <label
                  htmlFor="from"
                  className="leading-7 text-sm text-gray-600"
                >
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
                <label
                  htmlFor="subject"
                  className="leading-7 text-sm text-gray-600"
                >
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
                <label
                  htmlFor="text"
                  className="leading-7 text-sm text-gray-600"
                >
                  Your Email And Message
                </label>
                <input
                  id="text"
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
