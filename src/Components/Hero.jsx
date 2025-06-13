import React from 'react';

function Hero() {
  return (
    <div
      className='min-h-screen flex flex-col justify-center bg-no-repeat bg-cover bg-center'
      style={{
        backgroundImage: 'url(Assets/hero.png)',
      }}
    >
      {/* <div className='hero-overlay'></div> */}
      <div className='text-start mx-auto w-full container'>
        <div className='text-white'>
          <h1 className='mb-5 text-6xl font-extrabold'>
            We Handle the Tech.
            <br /> You Handle the Business.
          </h1>
          <p className='mb-5 text-xl max-w-md'>
            Naviqate builds fast, scalable websites and handles all the tech—so
            you can launch your business stress-free.”
          </p>
          <button className='primary-btn'>Book an appointment</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
