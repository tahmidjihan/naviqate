import React, { useEffect, useState } from 'react';
import { FaDesktop } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../../AuthProvider';
import Logo from '../../Components/logo';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import LoadingScreen from '../../Components/LoadingScreen';
import VerifyCompany from './verifyCompany';

function VerifyCompany() {
  const [company, setCompany] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const { user, userData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (user === 'userNotFound') {
        console.log('from verify company');
        setIsPending(false);
        navigate('/login');
      }
    }, 1000);
  });

  const { data, refetch, isLoading } = useQuery({
    queryKey: ['company'],
    queryFn: () =>
      axios.get(`/getUserByEmail/${user.email}`).then((res) => {
        if (res.data[0].company_id != null) {
          setCompany(true);
          setIsPending(false);
          // console.log(res.data[0]);
          // console.log('already a company!');
        } else {
          setCompany(false);
          setIsPending(false);
          // console.log('nice try diddy!');
        }
        return res.data[0];
      }),
  });
  // console.log(data.id);
  useEffect(() => {
    refetch();
  }, [company]);
  function updateCompany(company) {
    // console.log(company.id);
    axios
      .patch(
        `/updateUserCompany/?id=${data.id}&company=${company.name}&company_id=${company.id}&email=${company.email}`
      )
      .then((res) => {
        setCompany(true);
        setIsPending(false);
        navigate('/dashboard');
      });
  }

  function MakeCompany() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    function onSubmit(data) {
      const company = {
        name: data.companyName,
        email: data.companyEmail,
        created_by: user.displayName,
      };
      axios.post(`/createCompany`, company).then(async (res) => {
        await res.data;
        // console.log(res.data);
        updateCompany(res.data[0]);
      });
    }
    if (isPending) {
      // console.log('pending in verify company');
      return <LoadingScreen />;
    }
    return (
      <div className='card align-middle mx-auto bg-base-100 rounded-3xl border-gray-300 border-2 max-w-sm sm:max-w-md sm:min-w-md shrink-0 shadow-2xl'>
        <Logo className='max-w-xs mt-2 mb-1 mx-3' />
        <h3 className='text-4xl font-extrabold mx-5'>
          {/* {signUp ? 'Sign Up' : 'Login'} */}
        </h3>
        <div className='card-body'>
          <fieldset className='fieldset'>
            <form onSubmit={handleSubmit(onSubmit)} className='fieldset'>
              <label className='label font-bold text-black'>Company Name</label>
              <input
                type='text'
                className='input focus:ring-2 rounded-lg ring-cyan-500 transform focus:border-0 w-full focus:outline-none'
                placeholder='Company Name'
                name='name'
                {...register('companyName', {
                  required: true,
                  maxLength: 28,
                  minLength: 3,
                })}
              />
              <span className='text-red-500'>
                {errors.companyName?.type === 'required' &&
                  'Company name is required'}
              </span>
              <span className='text-red-500'>
                {errors.companyName?.type === 'minLength' &&
                  'Company name is too short'}
              </span>
              <span className='text-red-500'>
                {errors.companyName?.type === 'maxLength' &&
                  'Company name is too long'}
              </span>

              <label className='label font-bold text-black'>
                Company Email
              </label>
              <input
                type='email'
                className='input focus:ring-2 rounded-lg ring-cyan-500 transform focus:border-0 w-full focus:outline-none'
                placeholder='Company Email'
                name='email'
                {...register('companyEmail', {
                  required: true,
                  maxLength: 50,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
              <span className='text-red-500'>
                {errors.companyEmail?.type === 'required' &&
                  'Company email is required'}
              </span>
              <span className='text-red-500'>
                {errors.companyEmail?.type === 'pattern' &&
                  'Company email is invalid'}
              </span>
              {/* <label className='label font-bold text-black'>Password</label>
              <input
                type='password'
                className='input focus:ring-2 rounded-lg ring-cyan-500 transform focus:border-0 w-full focus:outline-none'
                placeholder='Password'
                name='password'
                {...register('password', {
                  required: true,
                  maxLength: 20,
                  minLength: 8,
                })}
              />
              <span className='text-red-500'>
                {errors.password?.type === 'required' && 'Password is required'}
              </span>
              <span className='text-red-500'>
                {errors.password?.type === 'minLength' &&
                  'Password is too short'}
              </span>
              <span className='text-red-500'>
                {errors.password?.type === 'maxLength' &&
                  'Password is too long'}
              </span> */}
              <div>
                {/* <a className='link link-hover'>Forgot password?</a> */}
              </div>
              <button className='btn primary-btn w-full mt-4'>
                Create Company
              </button>
            </form>

            <span className='my-2'>
              * If you are in a company that already registered please enter
              through the link provided by the company
            </span>
          </fieldset>
        </div>
      </div>
    );
  }

  return (
    <>
      {company !== true && (
        <div className='h-screen w-screen items-center-safe fixed z-[1000000] bg-cyan-600'>
          <div className='flex justify-center items-center h-full w-full'>
            <VerifyCompany />
            <MakeCompany />
          </div>
        </div>
      )}
    </>
  );
}

export default VerifyCompany;
