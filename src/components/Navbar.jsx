import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [state, setState] = React.useState(false);

  const handleState = () => {
    setState(!state);
  };

  return (
    <nav class='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
      <div class='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' class='flex items-center'>
          <img src='' class='mr-3 h-6 sm:h-9' alt='' />
          <span class='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Greenberg&Hastings Associates
          </span>
        </Link>

        <button
          onClick={handleState}
          data-collapse-toggle='navbar-default'
          type='button'
          class='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span class='sr-only'>Open main menu</span>
          <FaBars />
        </button>

        <div class={` w-full md:w-auto md:block ${state ? 'block' : 'hidden'}`}>
          <ul class='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <Link
                to='/'
                class='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                aria-current='page'
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to='/our-staff'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Our Staff
              </Link>
            </li>

            <li>
              <Link
                to='/practice-area'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Practice Area
              </Link>
            </li>

            <li>
              <Link
                to='/testimonials'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Testimonials
              </Link>
            </li>

            <li>
              <Link
                to='/contact'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
