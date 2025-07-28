import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logoutUser } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  // Check if user is authenticated and not a provider
  const isAuthenticatedUser = user && (!user.role || user.role !== "provider");

  return (
    <header className="bg-black shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* LEFT: Logo */}
        <div className="flex-shrink-0 mr-auto flex items-center gap-2">
          <img
            src="/images/D2D-logo.png"
            alt="Logo"
            className="h-8 w-8 object-contain"
          />
          <Link to="/" className="text-2xl font-bold text-white">
            D2D Service
          </Link>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="flex gap-8 text-white text-base font-medium">
          <Link
            to="/"
            className="relative group hover:text-[#FE5E41] transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FE5E41] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/services"
            className="relative group hover:text-[#FE5E41] transition"
          >
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FE5E41] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {isAuthenticatedUser && (
            <Link
              to="/my-bookings"
              className="relative group hover:text-[#FE5E41] transition"
            >
              My Booking
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FE5E41] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
        </div>

        {/* RIGHT: Search and Profile */}
        <div className="flex items-center gap-4 ml-auto relative">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search services..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-52 border border-gray-600 bg-black text-white placeholder-gray-400 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE5E41]"
            />
            <button
              type="submit"
              className="text-sm px-3 py-1 bg-[#FE5E41] text-white rounded hover:bg-[#e04b32] transition"
            >
              Search
            </button>
          </form>

          {/* Profile Icon */}
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-white text-2xl hover:bg-[#FE5E41] transition rounded-full p-1"
          >
            <FaUserCircle />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute top-12 right-0 bg-white text-black rounded-lg shadow-md ring-1 ring-[#FE5E41]/30 w-36 py-1 z-50">
              {user ? (
                <button
                  onClick={() => {
                    logoutUser();
                    setShowDropdown(false);
                  }}
                  className="w-full block px-4 py-1.5 text-sm text-gray-800 text-left hover:bg-[#FFE4DE] rounded transition"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setShowDropdown(false)}
                  className="w-full block px-4 py-1.5 text-sm text-gray-800 text-left hover:bg-[#FFE4DE] rounded transition"
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
