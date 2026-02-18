function Hero() {
  return (
    <section
      className="relative h-[65vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.jpg')"
      }}
    >

      {/* Overlay for pink tint */}
      <div className="absolute inset-0 bg-pink-200/40"></div>

      {/* Content */}
      <div className="relative text-center bg-white/70 backdrop-blur-sm p-12 rounded-3xl shadow-xl">
        <h1 className="text-5xl font-bold text-pink-700 mb-4">
          Handmade Collection 💖
        </h1>

        <p className="uppercase tracking-widest text-sm text-pink-500 mb-6">
          This Season’s
        </p>

        <button className="bg-pink-500 hover:scale-110 hover:bg-pink-600 text-white px-8 py-3 rounded-full transition">
          Shop Now
        </button>
      </div>

    </section>
  );
}

export default Hero;
