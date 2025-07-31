import React, { useEffect, useState } from 'react';
import { useAuth } from '../../AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

function VerifyWebsite() {
  const [website, setWebsite] = useState(false);
  const { user, getUserData } = useAuth();
  const { data, refetch } = useQuery({
    queryKey: ['website'],
    queryFn: () =>
      axios
        .get(
          `${import.meta.env.VITE_BACKEND}/websiteData/${
            getUserData.company_id
          }`
        )
        .then((res) => {
          setWebsite(true);
          return res.data;
        }),
  });
  useEffect(() => {
    refetch();
  });
  return (
    <div className='w-screen bg-[rgba(0,0,0,0.5)] h-screen absolute z-[5] flex items-center justify-center'>
      <div className='card bg-white rounded-2xl shadow-lg cyan-shadow'>
        <div className='card-body max-w-md'>
          <h2 className='card-title text-3xl'>Please Verify your website</h2>
          <p>
            Contact us to place order of your new website on chats on contact
            page and if you have a website please go to contact page and inform
            to us. If you have further queries please contact us in contact
            page.
          </p>
          <div className='card-actions'>
            <Link to='/dashboard/contact' className='btn primary-btn'>
              Contact Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyWebsite;
