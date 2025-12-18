// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false); // close search modal
      setSearchQuery(""); // reset input
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div>
            <Link to="/" className="text-2xl font-bold text-[#12f00a]">
              <img src={Logo} alt="Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link to="/" className="text-gray-800 hover:text-green-600 font-medium">
              Home
            </Link> */}
            <Link to="/gallery" className="text-gray-800 hover:text-green-600 font-medium">
              Gallery
            </Link>
            <Link to="/exhibitions" className="text-gray-800 hover:text-green-600 font-medium">
              Exhibitions
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-green-600 font-medium">
              Contact
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-green-600 font-medium">
              About
            </Link>
            <Link to="/donate" className="text-gray-800 hover:text-green-600 font-medium">
              Donate
            </Link>
          </div>

          {/* Search & Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-gray-200 transition"
              aria-label="Search"
            >
              <FiSearch className="w-5 h-5 text-gray-800" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-200 transition"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {["/", "/gallery", "/exhibitions", "/events", "/about"].map((path, idx) => (
            <Link
              key={idx}
              to={path}
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {path.replace("/", "") || "Home"}
            </Link>
          ))}
        </div>
      )}

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-md relative">
            <button
              onClick={toggleSearch}
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-200"
            >
              <FiX className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4">Search the Gallery</h2>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for artworks, exhibitions..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-[#12f00a] text-black font-semibold py-2 rounded-lg hover:bg-green-700 transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
