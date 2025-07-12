import React from 'react';

function AboutUs() {
  return (
    <>
      <div className='hero py-32'>
        <div className='hero-content flex-col lg:flex-row'>
          <img
            src='./Assets/about.png'
            className='rounded-lg md:max-w-[40%] '
          />
          <div>
            <h3 className='text-3xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'>
              About Us.
            </h3>
            <h1 className='text-6xl font-bold'>
              We Built <span className='text-cyan'>Naviqate</span> So You Don’t
              Have to <span className='text-cyan'>BEG</span> a{' '}
              <span className='text-cyan'>Developer</span>.
            </h1>
            <p className='py-6 max-w-md'>
              Naviqate gives you a website, hosting, and a powerful dashboard —
              all done-for-you. No tech stress, just launch and scale.
            </p>
            <button className='btn primary-btn'>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
