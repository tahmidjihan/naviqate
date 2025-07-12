import React from 'react';

function WhyChoose() {
  // its fragile than my Ego in responsiveness
  // so be careful while editing this component
  // this component made forcefully responsive
  // so it might not be the best code
  // but it works fine in all devices
  return (
    <>
      <div className='hero py-32 container lg:px-10 overflow-x-hidden  w-[95%] mx-auto lg:shadow-[00px_0px_30px] lg:shadow-cyan-500/70 bg-white rounded-3xl'>
        <div className='flex flex-col lg:flex-row-reverse items-center justify-between w-full xl:px-30'>
          <div>
            <img
              src='./Assets/why.png'
              className='object-cover max-h-[340px] 2xl:h-[340px] rounded-lg'
            />
          </div>
          <div className='xl:max-w-[600px] lg:max-w-md max-w-[90%]'>
            <h3 className='text-3xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'>
              Why Choose Us?
            </h3>
            <h1 className='text-5xl font-bold'>
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
