import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-170px)] bg-gradient-to-br from-[#fce4ec] via-[#e1bee7] to-[#e0f7fa] px-4 py-10 text-gray-800">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-purple-700 mb-4">Privacy Policy</h1>

          <p className="mb-4">
            At <strong>TodoMaster</strong>, we value your privacy. This policy explains what data we collect and how we use it.
          </p>

          <h2 className="text-lg font-semibold text-purple-600 mb-2">Data We Collect</h2>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Username and password for login</li>
            <li>Your tasks and completion status</li>
          </ul>

          <h2 className="text-lg font-semibold text-purple-600 mb-2">Usage & Security</h2>
          <p className="mb-4">
            Your data is used only for managing your to-dos and is stored securely. We never share it with third parties.
          </p>

          <p className="text-sm text-gray-600 mt-6">
            Questions? Contact us at <a className="underline text-purple-600" href="mailto:support@todomaster.app">support@todomaster.app</a>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;