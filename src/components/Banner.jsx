import React from 'react';

const Banner = () => {
  return (
    <div className=' w-full bg-yellow-400 flex flex-col py-10 justify-center items-center'>
      <p className='text-2xl text-white font-medium '>
        Get insights & tools to help your nonprofit organization through
        COVID-19
      </p>
      <p className='text-sm text-white cursor-pointer hover:text-gray-200'>
        Visit our contact for any information.
      </p>
    </div>
  );
};

export default Banner;
