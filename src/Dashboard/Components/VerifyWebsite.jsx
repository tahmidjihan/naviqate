import React, { useEffect, useState } from 'react';
import { useAuth } from '../../AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';
import axios from 'axios';
import LoadingScreen from '../../Components/LoadingScreen';

function VerifyWebsite() {
  const [website, setWebsite] = useState(false);
  const { user, userData } = useAuth();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['website'],
    queryFn: () =>
      axios.get(`/websiteData/${userData.company_id}`).then((res) => {
        if (res.data.length > 0) {
          setWebsite(true);
        }
        // console.log(res.data);
        return res.data;
      }),
  });
  useEffect(() => {
    refetch();
  }, [website, user, userData]);
  if (website === true) {
    return null;
  }
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className='h-screen w-screen flex items-center fixed z-[1000000] bg-cyan-600'>
      <div className='card align-middle mx-auto bg-base-100 rounded-3xl border-gray-300 border-2 max-w-sm sm:max-w-md sm:min-w-md shrink-0 shadow-2xl'>
        <div className='card-body max-w-md'>
          <h2 className='card-title text-3xl'>Please Verify your website</h2>
          <p>
            Contact us to place order of your new website on chats on contact
            page and if you have a website please go to contact page and inform
            to us. If you have further queries please contact us in contact
            page.If you ordered a Website wait for 3-4 business days to get it.
          </p>
          <div className='card-actions'>
            <Link to='/dashboard/contact' className='btn primary-btn'>
              Contact Page
            </Link>
            <Link to='/makeWebsite' className='btn primary-btn'>
              Make website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyWebsite;
