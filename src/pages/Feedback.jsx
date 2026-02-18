import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function Feedback() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen">

      <Navbar />

      <section className="py-16 px-6 flex justify-center">
        <div className="bg-white w-full max-w-2xl p-10 rounded-3xl shadow-xl">

          <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">
            Customer Feedback 💖
          </h1>

          {submitted ? (
            <p className="text-center text-green-600 font-semibold">
              Thank you for your feedback!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />

              <textarea
                placeholder="Your Feedback"
                rows="4"
                className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full transition"
              >
                Submit Feedback
              </button>

            </form>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Feedback;
