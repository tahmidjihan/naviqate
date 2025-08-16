import React, { useEffect } from 'react';
import DashboardTable from './Components/DashboardTable';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../AuthProvider';

function Databases() {
  const COLORS = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
    '#FF9F40',
    '#C9CBCF',
    '#FF5E5E',
    '#8DD1E1',
    '#D1C4E9',
    '#81C784',
    '#F48FB1',
    '#FFD54F',
    '#90CAF9',
    '#CE93D8',
    '#A1887F',
    '#E57373',
    '#64B5F6',
    '#BA68C8',
    '#4DB6AC',
    '#F06292',
    '#AED581',
    '#9575CD',
    '#7986CB',
    '#E0E0E0',
  ];

  const { userData } = useAuth();
  const { data: databases, refetch } = useQuery({
    queryKey: ['databases'],
    queryFn: () =>
      axios
        .get(`/getDatabases?id=${userData.company_id}`)
        .then((res) => res.data),
  });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className='bg-white min-h-screen w-full'>
      <div className='p-4 my-10 lg:pl-16 xl:p-10 overflow-x-hidden container'>
        {' '}
        <h2 className='text-xl md:text-2xl lg:text-3xl'>
          Dashboard {'>'} databases
        </h2>
        <div className='py-2 grid grid-cols-1 lg:grid-cols-5 gap-5'>
          {/* Left Column - Table */}
          <div className='col-span-1 lg:row-span-2 lg:col-span-3 relative'>
            <DashboardTable addNew={true} />
          </div>

          {/* Right Column - Charts and Cards */}
          <div className='flex flex-col gap-5 lg:col-span-2'>
            {/* Activity Card */}
            <div className='card rounded-3xl cyan-shadow bg-base-100 w-full'>
              <div className='card-body p-5 sm:p-7'>
                <h3 className='card-title text-lg md:text-xl font-bold'>
                  Activity
                </h3>
                <div className='w-full flex justify-center'>
                  {databases && (
                    <ResponsiveContainer width='100%' height={300}>
                      <PieChart>
                        <Pie
                          data={databases}
                          dataKey='total_data'
                          nameKey='name'
                          cx='50%'
                          cy='50%'
                          outerRadius={100}
                          innerRadius={60}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {databases.map((entry, index) => (
                            <Cell
                              key={`cell-${entry.name}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value} entries`, 'Count']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>

            {/* Tutorial Card */}
            <div className='card rounded-3xl cyan-shadow bg-base-100 w-full'>
              <figure className='px-5 pt-5'>
                <img
                  src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                  alt='Database Tutorial'
                  className='rounded-xl w-full h-auto max-h-[200px] object-cover'
                />
              </figure>
              <div className='card-body items-start px-5 pb-5'>
                <h2 className='card-title text-lg md:text-xl font-bold'>
                  Watch a Tutorial
                </h2>
                <p className='text-sm md:text-base text-gray-600 mb-3'>
                  Learn how to manage your databases effectively
                </p>
                <div className='card-actions w-full'>
                  <button className='btn btn-primary w-full rounded-full'>
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Databases;
