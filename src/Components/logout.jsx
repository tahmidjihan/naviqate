import React, { useEffect } from 'react';
import { useAuth } from '../AuthProvider';
import { useNavigate } from 'react-router';

function Logout() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  useEffect(() => {
    if (user == 'userNotFound') {
      navigate('/');
    }
  });
  return (
    <div className='h-screen w-screen flex items-center fixed z-[1000000] bg-cyan-600'>
      <div className='card align-middle mx-auto bg-base-100 rounded-3xl border-gray-300 border-2 max-w-sm sm:max-w-md sm:min-w-md shrink-0 shadow-2xl'>
        <div className='card-body max-w-md'>
          <h2 className='card-title text-3xl'>Emergency Logout</h2>
          <p>
            Its is a quick escape if needed. You can escape or logout if
            dashboard don't works.
          </p>
          <div className='card-actions'>
            <button onClick={logout} className='btn primary-btn'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
