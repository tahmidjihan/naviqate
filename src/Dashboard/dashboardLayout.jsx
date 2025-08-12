import React, { useEffect, useState } from 'react';
import { FaBars, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { Outlet, useLocation, useNavigate, Link } from 'react-router';
import Logo from '../Components/logo';
import './dashboard.css';
import { FaGlobe, FaHouse, FaTable, FaDesktop } from 'react-icons/fa6';
import { useAuth } from '../AuthProvider';
import VerifyCompany from './Components/verifyCompany';
import LoadingScreen from '../Components/LoadingScreen';
import VerifyWebsite from './Components/VerifyWebsite';

function DashboardLayout() {
  const { user, logout } = useAuth();
  const [isPending, setIsPending] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (user == 'userNotFound') {
      setTimeout(() => {
        setIsPending(false);
        console.log('from dashboard');
        navigate('/login');
      }, 1000);
    } else if (user) {
      setIsPending(false);
      localStorage.setItem('token', null);
    }
  }, [user]);
  const path = useLocation().pathname;
  // console.log(path);
  if (isPending) {
    // console.log('pending in dashboard');
    return <LoadingScreen />;
  }
  function handleLogout() {
    logout();
    navigate('/login');
  }
  return (
    <>
      <VerifyCompany />
      {/* <VerifyWebsite></VerifyWebsite> */}
      <div className='flex'>
        {/* <div className='h-screen w-screen fixed z-[1000000] bg-cyan-600 lg:hidden'>
          <h1 className='text-2xl font-bold text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <FaDesktop className='text-8xl mx-auto' />
            <br />
            Sorry, We are not temporarily available other than desktop devices.
          </h1>
        </div> */}
        <div className='sm:sidebar fixed lg:relative lg:w-[270px] z-10 lg:cyan-shadow'>
          <div className='drawer lg:drawer-open'>
            <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content flex flex-col items-center justify-center'>
              {/* Page content here */}
              <label
                htmlFor='my-drawer-2'
                className='rounded-full bg-cyan-600 flex text-white gap-2 font-bold px-5 py-3 items-center drawer-button lg:hidden text-start m-4 '
              >
                <FaBars className='leading-0 text-2xl text-center' />
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
                  <Link to={'/'}>
                    <Logo />
                  </Link>
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
                <li
                  onClick={() => navigate('/dashboard/accounts')}
                  className={path === '/dashboard/accounts' ? 'active' : ''}
                >
                  <span>
                    <FaUser className='text-3xl' />
                  </span>
                  Accounts
                </li>
                <li
                  onClick={() => navigate('/dashboard/contact')}
                  className={path === '/dashboard/contact' ? 'active' : ''}
                >
                  <span>
                    <FaPhoneAlt className='text-3xl' />
                  </span>
                  Contact
                </li>
                <span
                  onClick={handleLogout}
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
