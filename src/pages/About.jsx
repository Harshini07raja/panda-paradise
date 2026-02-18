import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-[#fff0f6] min-h-screen text-gray-700">

      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-pink-100 to-pink-200">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
          About Panda Paradise
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-pink-600">
          Handmade accessories designed with care, quality, and attention to detail.
        </p>
      </section>

      {/* About Content */}
      <section className="px-8 md:px-20 py-16 bg-white">
  <h2 className="text-3xl font-semibold text-pink-600 mb-6">
    Who We Are
  </h2>

  <p className="leading-8 mb-6">
    Panda Paradise is an independent handmade accessories brand focused on
    delivering stylish, affordable, and thoughtfully designed pieces.
    We specialize in customizable bracelets, anti-tarnish chains,
    phone charms, and crochet creations that blend trend and quality.
  
    Our designs are carefully curated to suit everyday wear while
    maintaining durability and comfort. Each product is crafted with
    attention to detail, ensuring neat finishing and reliable materials.
  
    We operate with a simple approach — create accessories that are
    visually appealing, long-lasting, and reasonably priced.
    Our goal is to offer customers products they can confidently
    wear and gift.
  </p>
</section>


      {/* Our Values */}
      <section className="px-8 md:px-20 py-16 bg-[#ffe4f0]">
        <h2 className="text-3xl font-semibold text-pink-700 mb-10 text-center">
          What We Focus On
        </h2>

        <div className="grid md:grid-cols-3  gap-8 text-center">

          <div className="bg-white p-8 hover:scale-85 rounded-3xl shadow-md">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              Quality Materials
            </h3>
            <p>
              We use reliable and durable materials, including anti-tarnish
              chains that maintain their shine.
            </p>
          </div>

          <div className="bg-white p-8  hover:scale-85 rounded-3xl shadow-md">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              Customization Options
            </h3>
            <p>
              Personalized designs allow customers to create pieces that
              reflect their individual style.
            </p>
          </div>

          <div className="bg-white p-8  hover:scale-85 rounded-3xl shadow-md">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">
              Affordable Pricing
            </h3>
            <p>
              Our goal is to offer trendy and elegant accessories at
              accessible price points.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-pink-100">
        <h2 className="text-3xl font-bold  text-pink-700 mb-6">
          Explore Our Collection
        </h2>

        <a
          href="/shop"
          className="inline-block bg-pink-500 hover:bg-pink-600 hover:scale-60 text-white px-8 py-3 rounded-full shadow-md transition"
        >
          Visit Shop
        </a>
      </section>

      <Footer />

    </div>
  );
}

export default About;
