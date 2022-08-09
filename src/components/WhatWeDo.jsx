import React from 'react';
import { FaSuitcase } from 'react-icons/fa';
import { MdRestartAlt } from 'react-icons/md';
import { GiShakingHands, GiOlive } from 'react-icons/gi';

const WhatWeDo = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <h2 className='text-center font-medium text-[50px]'>What we do</h2>
      </div>

      <ul className='flex flex-col md:flex-row justify-center gap-8 '>
        <li className='inline-flex flex-col items-center'>
          <FaSuitcase className='text-[100px] border border-gray-400 rounded-full p-5 text-yellow-400' />
          <span className='font-medium text-lg'>General Counsel</span>
          <p className='w-40 text-center'>
            On-call counsel makes nonprofit organizations healthier, more stable
            and better able to stay mission focused.
          </p>
        </li>
        <li className='inline-flex flex-col items-center'>
          <MdRestartAlt className='text-[100px] border border-gray-400 rounded-full p-5 text-yellow-400' />
          <span className='font-medium text-lg'>Repositioning</span>
          <p className='w-40 text-center'>
            Whether an organization is merging, dissolving, or something in
            between, experienced counsel can take the stress out of
            organizational change.
          </p>
        </li>
        <li className='inline-flex flex-col items-center'>
          <GiShakingHands className='text-[100px] border border-gray-400 rounded-full p-5 text-yellow-400' />
          <span className='font-medium text-lg'>Crisis Management</span>
          <p className='w-40 text-center'>
            In times of crisis, prepared and trusted legal counsel can provide
            stability and clarity, bringing together the right resources when
            they are needed most.
          </p>
        </li>
        <li className='inline-flex flex-col items-center'>
          <GiOlive className='text-[100px] border border-gray-400 rounded-full p-5 text-yellow-400' />
          <span className='font-medium text-lg'>Startup</span>
          <p className='w-40 text-center'>
            Proper legal counsel is essential during the formation of any
            startup, especially a nonprofit. It's at this point when careful
            documentation and strategic efficiencies are crucial to support a
            nonprofit's success for years to come.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WhatWeDo;
