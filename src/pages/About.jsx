import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fce4ec] via-[#e1bee7] to-[#e0f7fa] blur-sm" />

      <div className="min-h-[calc(100vh-170px)] px-4 text-gray-800 flex items-center justify-center">
        <div className="max-w-3xl bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 mt-10 mb-16">
          <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">About Todo Master</h1>

          <p className="text-lg mb-4">
            <strong>Todo Master</strong> is a sleek and efficient task management tool built to keep your daily goals organized and easy to manage. Whether you're keeping track of chores, assignments, or work deadlines, Todo Master helps you stay on top of everything.
          </p>

          <ul className="list-disc list-inside mb-4 space-y-2 text-base">
            <li>Create, edit, delete, and complete tasks in a modern UI.</li>
            <li>View completed tasks or focus only on what's pending.</li>
            <li>Fully integrated with a Node.js + MongoDB backend for persistent storage.</li>
          </ul>

          <p className="text-base mb-4">
            The app is completely <span className="font-semibold">self-coded</span> using <strong>React, Tailwind CSS, Express.js, and MongoDB</strong>.
          </p>

          <div className="text-center mt-6 space-y-4">
            <a
              href="https://github.com/ashok280705/Todo-App"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition-all"
            >
              View on GitHub
            </a>
            <p className="text-sm text-gray-600">
              Want to contribute or suggest features? Feel free to star, fork, or raise issues on GitHub!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;