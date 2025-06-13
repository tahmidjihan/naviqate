import React from 'react';

function Navbar() {
  function Menu() {
    return (
      <>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </>
    );
  }

  return (
    <>
      <div className='backdrop-blur-lg bg-[rgba(255,255,255,0.4)] shadow-sm sticky max-h-[70px] -mb-[70px] top-0 z-50 '>
        <div className='navbar container mx-auto '>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  {' '}
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />{' '}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
              >
                <Menu />
              </ul>
            </div>
            <a className='btn btn-ghost text-xl'>daisyUI</a>
          </div>
          <div className='navbar-end text-black hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              <Menu />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
