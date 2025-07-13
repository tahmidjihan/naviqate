import React from 'react';

function Pricing() {
  // its fragile than my Ego in responsiveness
  // so be careful while editing this component
  // this component made forcefully responsive
  // so it might not be the best code
  // but it works fine in all devices
  return (
    <>
      <div className='hero py-32 my-10 container lg:px-10 overflow-x-hidden  w-[95%] mx-auto lg:shadow-[00px_0px_30px] lg:shadow-cyan-500/70 bg-white rounded-3xl'>
        <div className='flex flex-col lg:flex-row-reverse items-center justify-between w-full xl:px-30'>
          <div>
            <img
              src='./Assets/pricing-girl.png'
              className='object-cover max-h-[540px] 2xl:h-[540px]'
            />
          </div>
          <div className='max-w-md xl:max-w-[600px]'>
            <h3 className='text-3xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'>
              Pricing
            </h3>
            <h1 className='text-5xl font-bold'>
              <span className='text-cyan'>EVERYTHING</span> You Need to Launch —
              For the Price of 3<span className='text-cyan'> COFFEES</span>.
            </h1>
            <p className='py-6 max-w-md'>
              Naviqate gives you the tools big brands pay thousands for —
              website, dashboard, and database — all in one place, all for free
              to start. Because starting a business shouldn’t feel like betting
              your life savings on a landing page.
            </p>
            <div className='btn primary-btn'>Start Now</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
