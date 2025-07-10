import React from 'react';
import Logo from './logo';

function Hero() {
  return (
    <>
      {/* <Logo className={'mx-auto w-[300px]'}></Logo> */}
      <div className='p-20 flex flex-col justify-center relative items-center  min-h-[70rem] bg-white'>
        <img
          src='./Assets/hero-style-top.png'
          className='absolute top-0 right-0 max-w-[50%] h-auto z-0'
          alt='design object'
        />
        <div className='z-100 text-center'>
          <div className=''>
            <h1 className='text-6xl font-bold'>Your Business Dashboard,</h1>
            <h1 className='text-5xl font-extrabold text-cyan uppercase'>
              ON STEROIDS.
            </h1>

            <p className='py-6 max-w-lg mx-auto text-lg'>
              Naviqate gives you a free site and a powerful dashboard built for
              real business data. Export, track, and grow — no devs required.
            </p>
            <button className='btn primary-btn'>Get Started</button>
          </div>
        </div>
        <div className='z-0 h-[25rem] my-20'>
          <img
            src='./Assets/hero-bottom.png'
            className='absolute bottom-0 right-0 w-full rounded-[12rem]'
            alt='screenshot style'
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
