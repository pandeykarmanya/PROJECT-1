import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // Later: navigate to /services?search=query or filter data
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-8">

        {/* LOGO */}
        <div className="text-2xl font-bold text-indigo-600">
          UrbanClone
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-6 text-gray-700 text-sm font-medium">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/services" className="hover:text-indigo-600 transition">Services</Link>

          {/* SEARCH BAR */}
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search services..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <button
              type="submit"
              className="text-sm px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Search
            </button>
          </form>

          {/* LOGIN LINK */}
          <Link to="/login" className="hover:text-indigo-600 transition">Login</Link>
        </nav>

      </div>
    </header>
  );
}