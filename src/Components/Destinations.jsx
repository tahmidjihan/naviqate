import React from 'react';

function Destinations() {
  return (
    <div className='hero py-32'>
      <div className='hero-content flex-col lg:flex-row'>
        <div>
          <h3 className='text-3xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'>
            Destinations.
          </h3>
          <img
            src='./Assets/Destinations.png'
            className='rounded-lg max-w-[30vw]'
          />
        </div>

        <div>
          <h1 className='text-5xl font-bold'>
            We will not bother You Go wherever you want.
          </h1>
          <div className='py-6 min-w-[30vw]'>
            <h3
              href='#'
              className='text-xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'
            >
              <a href='#'>Home {'>'}</a>
            </h3>
            <h3
              href='#'
              className='text-xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'
            >
              <a href='#'>Sign In {'>'}</a>
            </h3>
            <h3
              href='#'
              className='text-xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'
            >
              <a href='#'>Dashboard {'>'}</a>
            </h3>
            <h3
              href='#'
              className='text-xl text-cyan font-bold mb-7 w-full border-b-black border-b-2'
            >
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                Special! {'>'}
              </a>
            </h3>
          </div>
          <button className='btn primary-btn'>Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
