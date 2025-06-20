import React from 'react';

function Logo({ className }) {
  return (
    <img
      src='./Assets/naviqate-logo.png'
      alt='Naviqate'
      className={`w-full max-h-14 rounded-xl ${className}`}
    />
  );
}

export default Logo;
