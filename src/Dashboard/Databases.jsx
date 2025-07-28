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
  const { getUserData } = useAuth();
  const { data: databases, refetch } = useQuery({
    queryKey: ['databases'],
    queryFn: () =>
      axios
        .get(
          `${import.meta.env.VITE_BACKEND}/getDatabases?id=${
            getUserData.company_id
          }`
        )
        .then((res) => {
          return res.data;
        }),
  });
  // console.log(databases);
  useEffect(() => {
    refetch();
  });
  return (
    <div className='bg-white min-h-screen w-full'>
      <div className='p-4 my-10 md:p-10 overflow-x-hidden container'>
        <h2 className='text-xl md:text-2xl'>Dashboard {'>'} databases</h2>
        <div className='py-2 flex flex-col lg:flex-row gap-5'>
          <div className='min-w-2/3'>
            <DashboardTable addNew={true} />
          </div>
          <div className='flex flex-col gap-5'>
            <div className='card w-xs bg-base-100 card-md cyan-shadow'>
              <div className='card-body p-'>
                <div className='card-title'>Activity</div>
                <div className='w-full max-w-[200px]'>
                  {databases && (
                    <ResponsiveContainer width={240} height={240}>
                      <PieChart>
                        <Pie
                          data={databases}
                          dataKey='total_data'
                          nameKey='name'
                          cx='50%'
                          cy='50%'
                          outerRadius={100}
                          innerRadius={60}
                          label
                        >
                          {databases &&
                            databases.map((entry, index) => (
                              <Cell
                                key={`cell-${entry.name}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
            <div className='card bg-base-100 w-xs cyan-shadow'>
              <figure className='px-4 pt-4'>
                <img
                  src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                  alt='Shoes'
                  className='rounded-xl'
                />
              </figure>
              <div className='card-body text-start'>
                <h2 className='card-title text-xl font-bold'>
                  Watch a Tutorial
                </h2>
                <div className='card-actions'>
                  <button className='btn btn-primary'>Buy Now</button>
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
