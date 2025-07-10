import React from 'react';

function Logo({ className }) {
  return (
    <img
      src='./Assets/naviqate-icon-beside.png'
      alt='Naviqate'
      className={`rounded-3xl ${className} bg-white`}
    />
  );
}

export default Logo;
