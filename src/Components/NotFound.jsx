import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import LoadingScreen from './LoadingScreen';

function NotFound() {
  const [pending, setPending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPending(false);
    }, 1000);
  });
  if (pending) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center bg-[#f2f2f2]'>
        {/* <h1 className='text-6xl text-cyan-500'>404</h1> */}
        <img src='../../Assets/404.png' className='max-w-[300px]' alt='' />
        <p className='text-center text-2xl text-gray-600 mt-3'>
          Page not found
        </p>
        <Link to='/'>
          <button className='primary-btn mt-5'>Go Home</button>
        </Link>
      </div>
    </>
  );
}

export default NotFound;
