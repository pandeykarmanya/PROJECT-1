import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // Later: navigate to /services?search=query
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-extrabold text-indigo-600 tracking-tight">
          D2D Service
        </Link>

        {/* NAV LINKS */}
        <nav className="flex flex-wrap items-center justify-center gap-4 text-gray-700 text-sm font-medium">
          <Link to="/" className="hover:text-indigo-600 transition-colors duration-200">
            Home
          </Link>
          <Link to="/services" className="hover:text-indigo-600 transition-colors duration-200">
            Services
          </Link>
          <Link to="/login" className="hover:text-indigo-600 transition-colors duration-200">
            Login
          </Link>
        </nav>

        {/* SEARCH BAR */}
        <form onSubmit={handleSearch} className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-64 border border-gray-300 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          />
          <button
            type="submit"
            className="text-sm px-4 py-1.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}