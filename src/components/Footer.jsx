import React from 'react'

export const Footer = () => {
  return (
     <footer className="bg-white/60 backdrop-blur-md border-t border-gray-200 py-4 mt-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <p className="mb-2 sm:mb-0">© {new Date().getFullYear()} Todo Master. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-purple-600 transition">Privacy</a>
          <a href="#" className="hover:text-purple-600 transition">Terms</a>
          <a href="#" className="hover:text-purple-600 transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
