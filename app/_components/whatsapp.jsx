"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "8585980880"; // Replace with your WhatsApp number

  return (
    <>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-32 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center w-14 h-14 z-50"
      >
        <FaWhatsapp size={30} />
      </a>
      <p className="fixed bottom-24 right-5 bg-green-500 text-white px-3 py-1 rounded-lg shadow-md text-sm font-semibold z-50 animate-bounce">
        Chat for Instant QUOTE
      </p>
    </>
  );
};

export default WhatsAppButton;
