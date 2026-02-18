import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";


function Contact() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen text-gray-700">

      <Navbar />

      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          We're here to assist you with orders and inquiries.
        </p>
      </section>

      {/* Contact Card */}
      <section className="flex justify-center px-6 pb-20">

        <div className="bg-white w-full max-w-3xl rounded-3xl shadow-xl p-10">

          <div className="grid md:grid-cols-2 gap-10">

            {/* Left Info */}
            <div>
              <h2 className="text-2xl font-semibold text-pink-600 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6 text-gray-600">

                <div className="flex items-center gap-4">
                  <FaPhone className="text-pink-500 text-xl" />
                  <span>+91 81484 32700</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-pink-500 text-xl" />
                  <span>pandaparadise@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaInstagram className="text-pink-500 text-xl" />
                  <span>@panda_paradise02</span>
                </div>

              </div>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col justify-center items-center bg-pink-50 rounded-2xl p-8 text-center">

              <h3 className="text-xl font-semibold text-pink-600 mb-4">
                Quick Order
              </h3>

              <p className="text-gray-600 mb-6">
                Click below to chat directly on WhatsApp and place your order instantly.
              </p>

              <a
                href="https://wa.me/918148432700"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-md transition"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contact;
