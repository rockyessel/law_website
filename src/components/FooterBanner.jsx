import React from 'react';

const FooterBanner = () => {
  return (
    <div className=' w-full bg-yellow-600 flex py-10 justify-center gap-52 text-white'>
      <div className='flex flex-col'>
        <div>
          <p>Cheshire Law Group</p>
          <p>5275 Germantown Avenue</p>
          <p>Philadelphia, PA 19144</p>
        </div>
        <div>
          <a href='mailto:info@CheshireNonprofitLaw.com'>
            info@CheshireNonprofitLaw.com
          </a>
          <p>267-331-4157</p>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='w-72 text-[18px] font-medium'>
          We believe legal counsel should strengthen communities
        </p>

        <p>© 2022 Cheshire Law Group</p>
      </div>
    </div>
  );
};

export default FooterBanner;
