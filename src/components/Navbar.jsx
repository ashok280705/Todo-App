import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 px-[7%] bg-gradient-to-r from-violet-500 to-violet-950 text-white box-border shadow-2xl backdrop-blur-sm border-b border-white/10'>
      <div className="logo animate-pulse">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">✓</span>
        </div>
      </div>
      <ul className='flex gap-7 font-bold text-[1.2vw]'>
        <li className='hover:text-violet-300 cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg'>Home</li>
        <li className='hover:text-violet-300 cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg'>About</li>
        <li className='hover:text-violet-300 cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-lg'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
