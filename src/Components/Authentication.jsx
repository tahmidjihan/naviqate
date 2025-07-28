import React, { useEffect, useState } from 'react';
import Logo from './logo';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../AuthProvider';
import LoadingScreen from './LoadingScreen';

function Authentication({ signUp }) {
  const { loginWithGoogle, loginWithX, loginWithEmail, signUpWithEmail, user } =
    useAuth();
  const navigate = useNavigate();
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPending(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, email, password);
    if (signUp) {
      signUpWithEmail(name, email, password);
    } else {
      loginWithEmail(email, password);
    }
  }
  if (pending) {
    return <LoadingScreen />;
  }
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: 'url("./Assets/auth.png")',
      }}
    >
      {/* <div className='hero-overlay'></div> */}
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='card bg-base-100 rounded-3xl border-gray-300 border-2 max-w-sm sm:max-w-md sm:min-w-md shrink-0 shadow-2xl'>
          <Logo className='max-w-xs mt-2 mb-1 mx-3' />
          <h3 className='text-4xl font-extrabold mx-5'>
            {signUp ? 'Sign Up' : 'Login'}
          </h3>
          <div className='card-body'>
            <fieldset className='fieldset'>
              <form onSubmit={handleSubmit} className='fieldset'>
                {signUp && (
                  <>
                    <label className='label font-bold text-black'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      className='input focus:ring-2 rounded-lg ring-cyan-500 transform focus:border-0 w-full focus:outline-none'
                      placeholder='Full Name'
                      name='name'
                    />
                  </>
                )}
                <label className='label font-bold text-black'>Email</label>
                <input
                  type='email'
                  className='input focus:ring-2 rounded-lg ring-cyan-500 transform focus:border-0 w-full focus:outline-none'
                  placeholder='Email'
                  name='email'
                />
                <label className='label font-bold text-black'>Password</label>
                <input
                  type='password'
                  className='input focus:ring-2 rounded-lg ring-cyan-500 transform focus:border-0 w-full focus:outline-none'
                  placeholder='Password'
                  name='password'
                />
                <div>
                  {/* <a className='link link-hover'>Forgot password?</a> */}
                </div>
                <button className='btn primary-btn w-full mt-4'>
                  {signUp ? 'Sign Up' : 'Login'}
                </button>
              </form>
              <div className='w-full flex justify-between items-center mt-4 flex-col md:flex-row gap-2'>
                <button
                  onClick={loginWithX}
                  className='btn rounded-full px-8 w-full md:w-4/9 bg-black text-white border-black'
                >
                  <svg
                    aria-label='X logo'
                    width='16'
                    height='12'
                    viewBox='0 0 300 271'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill='currentColor'
                      d='m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z'
                    />
                  </svg>
                  Login with X
                </button>
                <button
                  onClick={loginWithGoogle}
                  className='btn rounded-full w-full md:w-4/9 bg-white text-black border-[#e5e5e5]'
                >
                  <svg
                    aria-label='Google logo'
                    width='16'
                    height='16'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <g>
                      <path d='m0 0H512V512H0' fill='#fff'></path>
                      <path
                        fill='#34a853'
                        d='M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341'
                      ></path>
                      <path
                        fill='#4285f4'
                        d='m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57'
                      ></path>
                      <path
                        fill='#fbbc02'
                        d='m90 341a208 200 0 010-171l63 49q-12 37 0 73'
                      ></path>
                      <path
                        fill='#ea4335'
                        d='m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55'
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
              <span className='text-sm text-center my-1 '>
                {signUp ? 'Already have an account?' : 'Don’t have an account?'}{' '}
                {signUp ? (
                  <Link
                    className='link link-hover text-cyan-500 font-bold'
                    to='/Login'
                  >
                    Login
                  </Link>
                ) : (
                  <Link
                    className='link link-hover text-cyan-500 font-bold'
                    to='/SignUp'
                  >
                    Sign Up
                  </Link>
                )}
              </span>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
