import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() && password.trim()) {
      setMessage('✅ Logged in successfully!');
    } else {
      setMessage('❌ Please enter email and password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-24 relative overflow-hidden">

      {/* Background blur effect */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>

      {/* Login card */}
      <div className="relative z-10 bg-white p-10 rounded-2xl shadow-2xl w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-[#FE5E41] mb-8">
          Login
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FE5E41]"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FE5E41]"
              placeholder="••••••••"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#FE5E41] hover:bg-[#e04b32] text-white font-semibold rounded transition"
          >
            Login
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="text-center mt-4 text-sm font-medium text-gray-700">
            {message}
          </p>
        )}

        {/* Footer Text */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{' '}
          <Link to="/register" className="text-[#FE5E41] font-medium hover:underline">
            Create
          </Link>
        </p>
      </div>
    </div>
  );
}