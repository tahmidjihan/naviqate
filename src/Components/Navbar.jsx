import React from 'react';
import Logo from './logo';
import { FaBars } from 'react-icons/fa';

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
      <div className='bg-white container max-w-[95%] min-h-[6vh] fixed z-[1000] rounded-full my-3 cyan-shadow left-1/2 transform -translate-x-1/2 top-0 shadow-[0px_0px_40px] justify-center'>
        <div className='navbar'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'
              >
                <FaBars className='leading-0 text-2xl' />
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
              >
                <Menu />
              </ul>
            </div>
            <a className=''>
              <Logo className={'h-[50px] min-w-[200px] px-2'} />
            </a>
          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              <Menu />
            </ul>
          </div>
          <div className='navbar-end text-black hidden lg:flex'>
            <a className='btn primary-btn'>Get Started</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
{
  /* <Logo className={'h-[50px] px-2'} />; */
}
