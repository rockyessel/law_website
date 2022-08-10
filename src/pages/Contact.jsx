import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '../components';
import { HeroSliderDataContact } from '../services/index';

const Contact = () => {
  return (
    <div className='flex flex-col w-full my-5'>
      <HeroSlider data={HeroSliderDataContact} />
      <div className='container mx-auto md:h-[90vh]'>
        <section className=' w-full flex flex-col justify-center items-center md:flex-row gap-4'>
          <div className='w-1/2 flex flex-col gap-4'>
            <h3 className='text-2xl font-medium'>Connect with us</h3>
            <p>
              Historic Germantown is more than our home; it’s our inspiration.
              We take pride in being part of a culturally rich and progressive
              community. Our offices are located in the 18th-century
              Clarkson-Watson House, once headquarters to Thomas Jefferson and
              the office of the U.S. Attorney General. Come get to know us.
              Email or call to set up an appointment today.
            </p>
            <img
              src='https://roachjustice.com/wp-content/uploads/2017/06/Contact-an-Attorney.png'
              className='w-full md:w-1/2 shadow-md rounded self-center'
              alt=''
            />
          </div>

          <div className='w-1/2 flex justify-center md:mt-10 items-center'>
            <form>
              <div className='grid gap-6 mb-6 md:grid-cols-2'>
                <div>
                  <label
                    for='first_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    First name
                  </label>
                  <input
                    type='text'
                    id='first_name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none '
                    placeholder='John'
                    required
                  />
                </div>
                <div>
                  <label
                    for='last_name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Last name
                  </label>
                  <input
                    type='text'
                    id='last_name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none '
                    placeholder='Doe'
                    required
                  />
                </div>
                <div>
                  <label
                    for='company'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    <span>Company</span>
                    <span className='text-gray-300'> (optional)</span>
                  </label>
                  <input
                    type='text'
                    id='company'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none '
                    placeholder='Flowbite'
                    required
                  />
                </div>
                <div>
                  <label
                    for='phone'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Phone number
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none '
                    placeholder='123-45-678'
                    pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                    required
                  />
                </div>
              </div>
              <div className='mb-6'>
                <label
                  for='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Email address
                </label>
                <input
                  type='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none '
                  placeholder='john.doe@company.com'
                  required
                />
              </div>
              <div className='mb-6'>
                <label
                  for='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Title Areas
                </label>
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none '
                  placeholder='Family Law'
                  required
                />
              </div>
              <div className='mb-6'>
                <label
                  for='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  How Can We Help You
                </label>
                <textarea
                  type='text'
                  id='password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none '
                  placeholder='I want to know more about ...'
                  required
                />
              </div>

              <div className='flex items-start mb-6'>
                <div className='flex items-center h-5'>
                  <input
                    id='remember'
                    type='checkbox'
                    value
                    className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                    required
                  />
                </div>
                <label
                  for='remember'
                  className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                >
                  I agree with the{' '}
                  <Link
                    to='#'
                    className='text-blue-600 hover:underline dark:text-blue-500'
                  >
                    terms and conditions
                  </Link>
                  .
                </label>
              </div>
              <button
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
