import React, { useContext, useState } from 'react';
import Usercontext from "../context/context";

const Login = () => {
  const { setcurrentUser } = useContext(Usercontext);
  const [isRegister, setisRegister] = useState(false);

  const handleToggle = () => {
    setisRegister(!isRegister);
  };


  return (
    //this is the main container for the login page
    
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#e1bee7] to-[#fce4ec] px-4">
      <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl">
        
        {/* Logo + App Name */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-400 text-white rounded-full flex items-center justify-center shadow-md text-xl font-bold">
            ✓
          </div>
          <h1 className="text-2xl font-extrabold text-purple-700 tracking-wide">
            Todo<span className="text-pink-500">Master</span>
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Username - always shown */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your username"
            />
          </div>

          {/* Email */}
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

          {/* Password */}
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
            onClick={(e) => {alert("Button Clicked"); }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
          >
            {isRegister ? "Sign Up" : "Login"}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={handleToggle}
              className="text-purple-700 font-medium hover:underline"
            >
              {isRegister ? "Login" : "Sign up"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;