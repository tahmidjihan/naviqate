import React from 'react';

function WhyChoose() {
  return (
    <>
      <div className='hero py-32 container px-10 mx-auto shadow-[0px_0px_20px] shadow-cyan-500/50'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='w-[600px] '>
            <img src='./Assets/why.png' className='object-cover h-[340px]' />
          </div>
          <div className='max-w-[600px]'>
            <h3 className='text-3xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'>
              Why Choose Naviqate?
            </h3>
            <h1 className='text-6xl font-bold'>
              You don’t have to <span className='text-cyan'>SELL</span>
              your <span className='text-cyan'>HOUSE</span> to get a{' '}
              <span className='text-cyan'>BUSINESS</span>. running.
            </h1>
            <p className='py-6 max-w-md'>
              Naviqate gives you the tools big brands pay thousands for —
              website, dashboard, and database — all in one place, all for free
              to start. Because starting a business shouldn’t feel like betting
              your life savings on a landing page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChoose;
