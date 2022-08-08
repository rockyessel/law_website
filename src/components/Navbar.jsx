import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [state, setState] = React.useState(false);

  const handleState = () => {
    setState(!state);
  };

  return (
    <nav className='flex justify-center items-center gap-20 sticky top-0 bg-white'>
      <div>
        <img src='/logo512.png' alt='' className='w-20' />
      </div>

      <button
        type='button'
        onClick={handleState}
        className=' px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-500'
      >
        <FaBars />
      </button>

      <div className={''}>
        <ul className='flex gap-4 '>
          <Link to='/'>
            <li className='text-lg uppercase font-medium hover:text-gray-400 cursor-pointer'>
              Home
            </li>
          </Link>

          <Link to='/our-staff'>
            <li className='text-lg uppercase font-medium hover:text-gray-400 cursor-pointer'>
              Our Staff
            </li>
          </Link>

          <Link to='/practice-area'>
            <li className='text-lg uppercase font-medium hover:text-gray-400 cursor-pointer'>
              Practice Area
            </li>
          </Link>

          <Link to='/testimonials'>
            <li className='text-lg uppercase font-medium hover:text-gray-400 cursor-pointer'>
              Testimonials
            </li>
          </Link>

          <Link to='/contact'>
            <li className='text-lg uppercase font-medium hover:text-gray-400 cursor-pointer'>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
