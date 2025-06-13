import React from 'react';

function Footer() {
  return (
    <div
      className='min-h-[500px] flex flex-col justify-center bg-no-repeat bg-cover bg-center relative'
      style={{
        backgroundImage: 'url(Assets/Footer.png)',
      }}
    >
      <h1 className='text-white text-center text-2xl text-shadow-lg absolute bottom-0 left-0 right-0 py-5'>
        &copy; {new Date().getFullYear()} Naviqate
      </h1>
    </div>
  );
}

export default Footer;
