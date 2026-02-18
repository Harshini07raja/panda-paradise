import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-pink-50 shadow-sm">

      <h1 className="text-2xl font-bold text-pink-600">
        Panda Paradise
      </h1>

      <div className="space-x-8 text-sm font-medium">
        <Link to="/" className="hover:text-pink-500">Home</Link>
        <Link to="/shop" className="hover:text-pink-500">Shop</Link>
        <Link to="/About" className="hover:text-pink-500">About</Link>
        <Link to="/Contact" className="hover:text-pink-500">Contact</Link>
        <Link to="/feedback" className="hover:text-pink-500">Feedback</Link>

      </div>

    </nav>
  );
}

export default Navbar;
