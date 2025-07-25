import { Link } from "react-router-dom";

import LoginForm from "../components/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-12">
      <header className="fixed top-0 left-0 w-full bg-teal-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="D2D Service Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold">D2D Service</span>
        </div>
        <nav className="space-x-4">
          <a href="/" className="hover:text-orange-300">
            Home
          </a>
          <a href="/services" className="hover:text-orange-300">
            Services
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search services..."
            className="p-2 rounded-md bg-gray-700 text-white"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md">
            Search
          </button>
          <a href="/register" className="text-orange-500 hover:text-orange-600">
            Register
          </a>
        </div>
      </header>
      <div className="mt-20">
        <LoginForm />
      </div>
      <div className="fixed bottom-4 flex space-x-4">
        <button className="bg-white rounded-full p-2 shadow-md">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
        <button className="bg-white rounded-full p-2 shadow-md">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <button className="bg-white rounded-full p-2 shadow-md">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
