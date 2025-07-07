import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#e1bee7] to-[#fce4ec] px-4">
      <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Welcome Back
        </h2>
        
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <a href="#" className="text-purple-700 font-medium hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;