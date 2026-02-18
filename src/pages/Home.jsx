import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import butterflyImg from "../assets/butterfly.jpg";
import charmImg from "../assets/phone_charm.jpg";
import comboImg from "../assets/friendscombo.jpg";

import crochetImg from "../assets/crochet.jpg";

import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50   min-h-screen">


      <Navbar />
      <Hero />

      {/* Categories Section */}
      <section className="bg-[#fff0f6] py-12 px-6">
  <h2 className="text-3xl font-bold text-pink-700 mb-8">
    Trending 💖
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <ProductCard
      name="Butterfly Chain"
      price={59}
      image={butterflyImg}
      tag="BEST SELLER"
      stock={5}
    />
    <ProductCard
      name="Phone Charm"
      price={59}
      image={charmImg}
      tag="NEW"
    />
    <ProductCard
      name="Bracelet Combo"
      price={99}
      image={comboImg}
      tag="LIMITED"
      stock={3}
    />
    <ProductCard
      name="Crochet"
      price={199}
      image={crochetImg}
    />
  </div>
</section>
<section className="py-12 bg-pink-50 text-center">
  <h2 className="text-3xl font-bold text-pink-700 mb-10">
    What Our Customers Say
  </h2>

  <div className="grid md:grid-cols-3 gap-8 px-10">
    <div className="bg-white p-6 rounded-3xl shadow-md">
      <p>"The chain quality is amazing! Totally worth it."</p>
      <span className="block mt-4 font-semibold text-pink-600">
        – Aishwarya
      </span>
    </div>

    <div className="bg-white p-6 rounded-3xl shadow-md">
      <p>"Loved the customization. Looks exactly like I wanted."</p>
      <span className="block mt-4 font-semibold text-pink-600">
        – Meera
      </span>
    </div>

    <div className="bg-white p-6 rounded-3xl shadow-md">
      <p>"Affordable and super cute packaging!"</p>
      <span className="block mt-4 font-semibold text-pink-600">
        – Kavya
      </span>
    </div>
  </div>
</section>

<section className="py-16 bg-white px-10">
  <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">
    Frequently Asked Questions
  </h2>

  <div className="space-y-6 max-w-3xl mx-auto">
    <div>
      <h3 className="font-semibold text-pink-600">
        Are the chains really anti-tarnish?
      </h3>
      <p>Yes, they are made from durable materials designed to maintain shine.</p>
    </div>

    <div>
      <h3 className="font-semibold text-pink-600">
        Do you accept custom orders?
      </h3>
      <p>Yes, customization is available for selected products.</p>
    </div>
  </div>
</section>
<section className="py-16 bg-pink-100 text-center">
  <h2 className="text-3xl font-bold text-pink-700 mb-6">
    Follow Us on Instagram
  </h2>

  <a
    href="https://instagram.com/panda_paradise02"
    target="_blank"
    className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full"
  >
    Visit Instagram
  </a>
</section>

      <Footer />

    </div>
  );
}

export default Home;
