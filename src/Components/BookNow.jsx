import React from 'react';

function BookNow() {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: 'url(./Assets/BookNow.png)',
      }}
    >
      {/* <div className='hero-overlay'></div> */}
      <div className='container text-neutral-content text-start'>
        <div className='text-white py-10 px-4'>
          <h1 className='mb-5 text-6xl font-bold'>Book an appointment now!</h1>
          <p className='mb-5 max-w-2xl'>
            At Naviqate, we’re the tech team behind your business launch. We
            don’t do fluff; we do functional—fast, scalable websites and backend
            systems built to handle real business. Whether you're starting from
            scratch or leveling up, we handle the code, the setup, and the tech
            headaches, so you can focus on building what actually matters. No
            corporate BS. Just solid, reliable tech made for founders who move
            fast.
          </p>
          <button className='primary-btn'>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
