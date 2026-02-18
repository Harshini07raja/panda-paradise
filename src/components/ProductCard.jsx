function ProductCard({ image, name, price, tag, stock }) {
  return (
    <div className="relative bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 overflow-hidden">

      {/* Tag Badge */}
      {tag && (
        <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow">
          {tag}
        </span>
      )}

      <img src={image} className="w-full h-60 object-cover" />

      <div className="p-5 text-center">
        <h3 className="font-semibold text-lg text-gray-700">
          {name}
        </h3>

        <p className="text-pink-600 font-bold mt-2">
          ₹{price}
        </p>

        {/* Limited Stock Warning */}
        {stock && stock <= 5 && (
          <p className="text-sm text-red-500 mt-2 font-medium animate-pulse">
            Only {stock} left in stock!
          </p>
        )}

        <a
          href={`https://wa.me/917010085237?text=Hi! I want to order ${name} - ₹${price}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          Order on WhatsApp 💬
        </a>

      </div>
    </div>
  );
}

export default ProductCard;
