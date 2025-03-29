"use client"

export default function Footer() {

  const handleSendEmail = () => {
    window.location.href = "mailto:atharvneware28@gmail.com";
  };
    return (
      <footer className="bg-[#860764] text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
            {/* Company Info */}
            <div className="text-white">
              <h2 className="text-xl font-semibold">🚛 SueellAlly</h2>
              <p className="mt-2 text-white">
                101, West Balaji Nagar, Ulhas Nagar, Rameshwari, Nagpur,
                Maharashtra 440027
              </p>
              <a
                href="https://maps.app.goo.gl/ov5a22MxNPLFuGpf7"
                className="my-8"
              >
                {" "}
                📍 Click To Open Map
              </a>

              <p className="mt-2 text-white">📞 (+91) 8585 980 880</p>
              <p className="mt-2 text-white" onClick={handleSendEmail}>
                📧 sueeally@gmail.com
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xl font-semibold">Our Services</h2>
              <ul className="mt-2 space-y-2">
                <li>✔️ Logistics Solutions (PAN India)</li>
                <li>✔️ Over Dimensional Cargo (ODC)</li>
                <li>✔️ Operating working capital (OWC) </li>
                <li>✔️ Part Load Services </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold">Quick Links</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="hover:text-gray-300">
                    🏠 Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-gray-300">
                    📖 About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-gray-300">
                    🛠 Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-300">
                    📩 Contact
                  </a>
                </li>
                {/* <li><a href="/faq" className="hover:text-gray-300">❓ FAQs</a></li> */}
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center md:justify-start mt-6 space-x-4">
            <a href="#" className="hover:text-blue-400">
              📘 Facebook
            </a>
            <a href="#" className="hover:text-blue-400">
              🐦 Twitter
            </a>
            <a href="#" className="hover:text-pink-400">
              📸 Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/sandip-hatwar-96b539180/?originalSubdomain=in"
              className="hover:text-blue-600"
            >
              💼 LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6 text-white">
            © 2025 SueellAlly Private Limeted . All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
  