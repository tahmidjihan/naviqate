import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import LoadingScreen from '../../Components/LoadingScreen';

function InvitedCompany() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const companyId = searchParams.get('company_id');
  const companyName = searchParams.get('company_name');
  const companyEmail = searchParams.get('company_email');
  useEffect(() => {
    setTimeout(() => {
      if (!companyId && !companyName && !companyEmail) {
        navigate('/');
      } else if (companyId && companyName && companyEmail) {
        setLoading(false);
      }
    }, 1000);
  }, [companyId, companyName && companyEmail]);
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div className='h-screen w-screen flex items-center fixed z-[1000000] bg-cyan-600'>
      <div className='card align-middle mx-auto bg-base-100 rounded-3xl border-gray-300 border-2 max-w-sm sm:max-w-md sm:min-w-md shrink-0 shadow-2xl'>
        <div className='card-body max-w-md'>
          <h2 className='text-3xl'>
            You have been invited from{' '}
            <span className='font-bold text-cyan-500'>{companyName}</span>
          </h2>
          <p>
            You have been invited to join a company. Please click on the button
            below to accept the invitation.
          </p>
          <div className='divider'></div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className=' w-full flex flex-row'
          >
            <input
              type='text'
              placeholder='Company Secret'
              minlength='64'
              maxlength='64'
              required
              title='Must be more than 8 characters, including number, lowercase letter, uppercase letter'
              className='input focus:outline-none focus:border-none focus:ring-2 focus:ring-cyan-500 validator'
            />
            <span className='validator-hint hidden'></span>
            <button className='btn bg-cyan-500 text-white'>Accept</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InvitedCompany;
