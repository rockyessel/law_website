import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center gap-20'>
      <div>
        <img src='/logo512.png' alt='' className='w-20' />
      </div>

      <div className='visible'>
        <ul className='flex gap-4 '>
          <li className='text-lg uppercase font-medium hover:text-gray-400 cursor-pointer'>Home</li>
          <li className='text-lg uppercase font-medium hover:text-gray-400 cursor-pointer'>Our Stuff</li>
          <li className='text-lg uppercase font-medium hover:text-gray-400 cursor-pointer'>Practice Area</li>
          <li className='text-lg uppercase font-medium hover:text-gray-400 cursor-pointer'>Testimonials</li>
          <li className='text-lg uppercase font-medium hover:text-gray-400 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
