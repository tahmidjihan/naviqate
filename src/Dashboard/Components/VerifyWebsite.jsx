import React, { useState } from 'react';
import { useAuth } from '../../AuthProvider';
import { useQuery } from '@tanstack/react-query';

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
  return <div>VerifyWebsite</div>;
}

export default VerifyWebsite;
