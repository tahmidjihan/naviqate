import React, { useEffect } from 'react';
import { FaBars, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { Outlet, useNavigate } from 'react-router';
import Logo from '../Components/logo';
import './dashboard.css';
import { FaGlobe, FaHouse, FaTable } from 'react-icons/fa6';
import { useAuth } from '../AuthProvider';

function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);
  return (
    <>
      <div className='flex'>
        <div className='sm:sidebar fixed  z-10'>
          <div className='drawer lg:drawer-open'>
            <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content flex flex-col items-center justify-center'>
              {/* Page content here */}
              <label
                htmlFor='my-drawer-2'
                className='btn btn-ghost drawer-button lg:hidden text-start w-full m-4 '
              >
                <FaBars className='leading-0 text-2xl text-black' />
              </label>
            </div>
            <div className='drawer-side'>
              <label
                htmlFor='my-drawer-2'
                aria-label='close sidebar'
                className='drawer-overlay'
              ></label>
              <ul className='flex flex-col relative gap-3 sidebar-menu bg-white border-r-2 border-r-base-300 text-base-content min-h-full w-80 p-4'>
                {/* Sidebar content here */}
                <li className='flex items-center justify-center w-full logo-part'>
                  <Logo className={'w-[250px]'} />
                </li>
                <li className='active'>
                  <span>
                    <FaHouse className='text-3xl' />
                  </span>
                  Dashboard
                </li>
                <li>
                  <span>
                    <FaTable className='text-3xl' />
                  </span>
                  Databases
                </li>
                <li>
                  <span>
                    <FaGlobe className='text-3xl' />
                  </span>
                  Web Manager
                </li>
                <li>
                  <span>
                    <FaUser className='text-3xl' />
                  </span>
                  Account
                </li>
                <li>
                  <span>
                    <FaPhoneAlt className='text-3xl' />
                  </span>
                  Contact
                </li>
                <span
                  onClick={logout}
                  className='text-cyan text-2xl mx-4 absolute bottom-4 font-bold hover:text-shadow-cyan-500/90 hover:text-shadow-[0px_0px_30px] cursor-pointer'
                >
                  Logout
                </span>
              </ul>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default DashboardLayout;
