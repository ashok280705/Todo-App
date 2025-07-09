import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-160px)] bg-gradient-to-br from-[#fce4ec] via-[#e1bee7] to-[#e0f7fa] px-4 py-10 text-gray-800">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-purple-700 mb-6">Contact Us</h1>

          <p className="mb-4">
            We'd love to hear from you! Whether you have a question, feedback, or a feature request — just reach out.
          </p>

          <div className="space-y-3">
            <p>
              📧 Email:{" "}
              <a href="mailto:support@todomaster.app" className="text-purple-600 underline">
                support@todomaster.app
              </a>
            </p>
            <p>
              💻 GitHub:{" "}
              <a href="https://github.com/ashok280705/Todo-App" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">
                github.com/ashok280705/Todo-App
              </a>
            </p>
            <p>
              📝 Want to contribute? You're welcome! Visit our GitHub repository and feel free to fork, star, or raise an issue.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;