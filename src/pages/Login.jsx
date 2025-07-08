import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"; // ✅ added this
import Usercontext from "../context/context";

const Login = () => {
  const navigate = useNavigate(); // ✅ added this
  const { setcurrentUser } = useContext(Usercontext);
  const [isRegister, setisRegister] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleToggle = () => {
    setisRegister(!isRegister);
    reset();
  };

  const onSubmit = async (data) => {
    const endpoint = isRegister ? "register" : "login";

    try {
      const res = await fetch(`http://localhost:3000/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!result.success) {
        alert(result.message);
        return;
      }

      alert(result.message);
      setcurrentUser(data.username);
      navigate("/app"); // ✅ now it will navigate correctly
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#e1bee7] to-[#fce4ec] px-4">
      <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-400 text-white rounded-full flex items-center justify-center shadow-md text-xl font-bold">
            ✓
          </div>
          <h1 className="text-2xl font-extrabold text-purple-700 tracking-wide">
            Todo<span className="text-pink-500">Master</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your username"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" }
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
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
              {isRegister ? "Login" : "Sign Up"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;