import ProductCard from "../components/ProductCard";
import braceletImg from "../assets/bracelets.jpg";
import charmImg from "../assets/phone_charm.jpg";
import chainImg from "../assets/chain.jpg";
import crochetImg from "../assets/crochet.jpg";
import butterflyImg from "../assets/butterfly.jpg";
import comboImg from "../assets/friendscombo.jpg"
import chaincombo from "../assets/chaincombo.jpg";
import braceImg from "../assets/bracelet.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Shop() {
  
  const products = [
  {
    id: 1,
    name: " Anti-Tarnish Chain",
    oldPrice: 99,
    price: 59,
    image: butterflyImg,
    tag: "New Launch"
  },
  {
    id: 2,
    name: "Double Layer Anti-Tarnish Chain",
    oldPrice: 199,
    price: 159,
    image: chainImg
  },
  {
    id: 3,
    name: "Crochet Keychain",
    oldPrice: 300,
    price: 159,
    image: crochetImg,
    tag: "Best Seller",
    
  },{
    id: 4,
    name: "Phone Charms",
    oldPrice: 60,
    price: 39,
    image: charmImg,
    tag: "Best Seller"
  },{
    id: 5,
    name: "Bracelets",
    oldPrice: 60,
    price: 49,
    image: braceletImg,
    tag: "Best Seller"
  },
  {
    id: 6,
    name: " Bracelet Combo",
    oldPrice: 149,
    price: 99,
    image: comboImg,
    tag: "Combo Offer"
  },{
    id: 3,
    name: "Bracelets with customizable beads",
    oldPrice: 60,
    price: 49,
    image: braceImg,
    tag: "Best Seller"
  },
  {
    id: 4,
    name: " Anti-tarnish chains with matching bracelets",
    oldPrice: 149,
    price: 99,
    image: chaincombo,
    tag: "Combo Offer"
  },

];

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50  min-h-screen p-10">
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-12">
        Our Collection 💖
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
       <Footer />
    </div>
  );
}

export default Shop;
