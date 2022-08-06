import React from 'react';

const WhoWeAre = () => {
  return (
    <div className='flex gap-4 justify-center items-center'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-[50px] font-bold'>Who we are</h1>
        <p className='w-96 text-lg '>
          Cheshire Law Group is a sophisticated law office in a small shop,
          addressing everything from legal crises to our clients’ day-to-day
          needs. We take a holistic and pragmatic approach to providing legal
          counsel.
        </p>

        <p className='w-96 text-lg '>
          We are a collaborative group, each of us driven by a passion to serve
          the nonprofit sector.
        </p>

        <button
          type='button'
          className=' text-lg border w-40 border-gray-500 px-2 py-1 uppercase hover:rounded  hover:bg-yellow-400 hover:text-white hover:border-yellow-400 hover:border'
        >
          Meet our team
        </button>
      </div>

      <div className='flex items-center gap-4'>
        <div>
          <img
            src='/logo512.png'
            alt=''
            className='w-40 bg-yellow-400 rounded-full'
          />
        </div>
        <div>
          <h3 className='font-bold text-yellow-600 hover:text-gray-400'>
            Eoin Carrick
          </h3>
          <p className='w-48 text-lg '>
            "It's so gratifying to help an organization reach that point where
            it is beyond conflict..."
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
