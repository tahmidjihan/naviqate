import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

function LoadingScreen() {
  return (
    <>
      <div className='absolute animation fade-out bg-white top-0 z-[1000000] h-screen w-screen flex justify-center items-center'>
        <div>
          <img
            className='animate-bounce w-20 h-20'
            src='../../Assets/spinner.png'
            alt=''
          />
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
