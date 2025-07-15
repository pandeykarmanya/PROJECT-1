import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirm) {
      setMessage('❌ Please fill in all fields.');
    } else if (password !== confirm) {
      setMessage('❌ Passwords do not match.');
    } else {
      setMessage('✅ Account created successfully!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-24 relative overflow-hidden">

      {/* Blur background layer */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>

      {/* Form container */}
      <div className="relative z-10 bg-white p-10 rounded-2xl shadow-2xl w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-[#FE5E41] mb-8">
          Create an Account
        </h2>

        <form className="space-y-5" onSubmit={handleRegister}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FE5E41]"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FE5E41]"
              placeholder="••••••••"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#FE5E41] hover:bg-[#e04b32] text-white font-semibold rounded transition"
          >
            Register
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="text-center mt-4 text-sm font-medium text-gray-700">
            {message}
          </p>
        )}
        
      </div>
    </div>
  );
}