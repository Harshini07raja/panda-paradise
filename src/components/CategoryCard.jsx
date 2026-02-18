function CategoryCard({ title, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:scale-105 transition overflow-hidden">
      <img src={image} className="w-full h-56 object-cover" />
      <div className="p-4 text-center">
        <h3 className="font-semibold text-pink-600">{title}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;
