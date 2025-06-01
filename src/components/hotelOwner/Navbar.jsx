import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300 z-10 relative h-16'>
      {/* Logo */}
      <Link to='/' className="flex items-center gap-2">
        <img
          src={assets.logo}
          alt="Quick Stay"
          className='h-9 opacity-90'
        />
        <span className='hidden md:inline font-semibold text-lg text-gray-800'>
          Quick Stay
        </span>
      </Link>

      {/* Right Side - Add Dashboard Link here */}
      <div className='flex items-center gap-4'>
        <Link
          to='/owner'
          className='px-4 py-1 border border-black rounded-full text-sm font-medium text-gray-800 hover:bg-gray-100 transition'
        >
          Dashboard
        </Link>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
