import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white/60 backdrop-blur-md border-t border-gray-200 py-4 mt-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <p className="mb-2 sm:mb-0">© {new Date().getFullYear()} Todo Master. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/app/privacy" className="hover:text-purple-600 transition">Privacy</Link>
          <Link to="/app/terms" className="hover:text-purple-600 transition">Terms</Link>
          <Link to="/app/contact" className="hover:text-purple-600 transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;