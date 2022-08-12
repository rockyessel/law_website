import React, { useRef } from 'react';
import { HeroSlider } from '../components';
import { HeroSliderDataContact as dataContact } from '../services/index';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_85a5ebj',
        'template_0fxvk35',
        form.current,
        'J9526QFDZsH8bGzfQ'
      )
      .then((result) => {
        console.log(result.text);
      });
  };
  return (
    <React.Fragment>
      <HeroSlider data={dataContact} />
      <section className='w-full bg-blue-600 py-10'>
        <h3 className='text-center text-2xl font-bold text-white uppercase'>
          Contact us
        </h3>
      </section>

      <div className='flex flex-col w-full my-5'>
        <div className='container mx-auto md:h-[90vh]'>
          <section className=' w-full flex flex-col justify-center items-center md:flex-row gap-4'>
            <div className='w-1/2 flex flex-col gap-4'>
              <h3 className='text-2xl font-medium'>Connect with us</h3>
              <p>
                At Greenberg, we don’t just say that your problem is important
                to us. We mean it. Communication with our clients is important
                to us. We believe that clear lines of communication are integral
                in accomplishing what we need to do for our clients. When you
                come to us with a legal problem, we will take the time to listen
                to you. We will remain in touch with you throughout the process
                of resolving the problem. Your phone calls will be returned and
                your e-mails will be answered. We believe this level of personal
                attention is important.
              </p>
              <img
                src='https://roachjustice.com/wp-content/uploads/2017/06/Contact-an-Attorney.png'
                className='w-full md:w-1/2 shadow-md rounded self-center'
                alt=''
              />
            </div>

            <div className='w-1/2 flex justify-center md:mt-10 items-center'>
              <form ref={form} className='w-full' onSubmit={sendEmail}>
                <div className='mb-6'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                    FullName
                  </label>
                  <input
                    type='text'
                    name='user_name'
                    id='fullname'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none '
                    placeholder='eg. John Deo'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                    Email address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='user-email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none '
                    placeholder='eg. john.doe@company.com'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                    Title Area
                  </label>
                  <input
                    type='text'
                    name='user_title'
                    id='fullname'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none '
                    placeholder='eg. Family law'
                    required
                  />
                </div>
                <div className='mb-6'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                    How Can We Help You
                  </label>
                  <textarea
                    type='text'
                    id='password'
                    name='message'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none '
                    placeholder='I want to know more about ...'
                    required
                  />
                </div>
                <button
                  type='submit'
                  value='send'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
