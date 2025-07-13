import React from 'react';
import DashboardTable from './Components/DashboardTable';
import {
  Bar,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Legend,
  XAxis,
} from 'recharts';

function Dashboard() {
  const data = [
    { name: 'Jan', users: 1346 },
    { name: 'Feb', users: 987 },
    { name: 'Mar', users: 1523 },
    { name: 'Apr', users: 1104 },
    { name: 'May', users: 1327 },
    { name: 'Jun', users: 1452 },
    { name: 'Jul', users: 1398 },
    { name: 'Aug', users: 689 },
    { name: 'Sep', users: 867 },
    { name: 'Oct', users: 1003 },
    { name: 'Nov', users: 932 },
    { name: 'Dec', users: 1499 },
  ];
  return (
    <div className='bg-white min-h-screen w-full'>
      <div className='p-10'>
        <h2 className='text-2xl'>Dashboard</h2>
        <div className='py-2'>
          <div>
            <div>
              <div className='card rounded-3xl cyan-shadow mb-5 bg-base-100 w-[600px]'>
                <div className='card-body'>
                  <h2 className='font-bold text-3xt text-gray-600'>
                    Visits On Last Year
                  </h2>
                  <ResponsiveContainer width='100%' height={300}>
                    <BarChart data={data}>
                      <Bar dataKey='users' fill='#00bbc1' />
                      <XAxis dataKey='name' />
                      <Tooltip />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <DashboardTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
