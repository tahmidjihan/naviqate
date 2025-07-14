import React, { useEffect } from 'react';
import { FaBars, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { Outlet, useLocation, useNavigate } from 'react-router';
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
  const path = useLocation().pathname;
  console.log(path);
  return (
    <>
      <div className='flex'>
        <div className='sm:sidebar fixed lg:relative lg:w-[270px] z-10 lg:cyan-shadow'>
          <div className='drawer lg:drawer-open'>
            <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content flex flex-col items-center justify-center'>
              {/* Page content here */}
              <label
                htmlFor='my-drawer-2'
                className='rounded-full bg-[#000]  drawer-button lg:hidden text-start m-4 '
              >
                <FaBars className='leading-0 text-2xl text-white text-center' />
                Menu
              </label>
            </div>
            <div className='drawer-side'>
              <label
                htmlFor='my-drawer-2'
                aria-label='close sidebar'
                className='drawer-overlay'
              ></label>
              <ul className='flex flex-col max-w-[260px] fixed gap-3 sidebar-menu bg-white border-r-2 border-r-base-300 text-base-content min-h-full w-80 p-4'>
                {/* Sidebar content here */}
                <li className='flex items-center justify-center w-full logo-part'>
                  <Logo className={'w-[250px]'} />
                </li>
                <li
                  className={path === '/dashboard' ? 'active' : ''}
                  onClick={() => navigate('/dashboard')}
                >
                  <span>
                    <FaHouse className='text-3xl' />
                  </span>
                  Dashboard
                </li>
                <li
                  className={path === '/dashboard/databases' ? 'active' : ''}
                  onClick={() => navigate('/dashboard/databases')}
                >
                  <span>
                    <FaTable className='text-3xl' />
                  </span>
                  Databases
                </li>
                <li
                  onClick={() => navigate('/dashboard/WebManager')}
                  className={path === '/dashboard/WebManager' ? 'active' : ''}
                >
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
