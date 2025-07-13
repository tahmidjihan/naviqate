import React from 'react';
import DashboardTable from './Components/DashboardTable';
import { FaCircleInfo, FaFileArrowDown } from 'react-icons/fa6';
import {
  Bar,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Legend,
  XAxis,
  YAxis,
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
      <div className='p-4 md:p-10 overflow-x-hidden container'>
        <h2 className='text-xl md:text-2xl'>Dashboard</h2>
        <div className='py-2'>
          <div className='flex flex-col lg:flex-row gap-5'>
            <div className='w-full md:w-full lg:max-w-[700px] lg:w-7/12 xl:w-9/12 my-5'>
              <div className='card rounded-3xl cyan-shadow bg-base-100'>
                <div className='card-body'>
                  <h2 className='font-bold text-2xl md:text-4xl mx-2 md:mx-5 my-2 text-gray-600'>
                    Visits On Last Year
                  </h2>
                  <ResponsiveContainer width='100%' height={300}>
                    <BarChart data={data}>
                      <Bar dataKey='users' fill='#00bbc1' />
                      <XAxis dataKey='name' />
                      <YAxis />
                      <Tooltip />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-5 justify-between py-10 w-full lg:w-3/12'>
              <div className='card rounded-3xl cyan-shadow bg-base-100 w-full min-w-[250px] xl:min-w-xs h-full'>
                <div className='card-body flex-row items-center align-middle'>
                  <div className='text-4xl lg:text-7xl text-cyan'>
                    <FaCircleInfo />
                  </div>
                  <div>
                    <h4 className='text-base md:text-lg font-bold text-gray-700'>
                      Total visits
                    </h4>
                    <h2 className='text-3xl lg:text-4xl xl:text-6xl font-bold'>
                      1742+
                    </h2>
                  </div>
                </div>
              </div>
              <div className='card rounded-3xl cyan-shadow bg-cyan w-full min-w-[250px] xl:min-w-xs h-full'>
                <div className='card-body flex-row items-center align-middle'>
                  <div className='text-4xl lg:text-7xl text-white'>
                    <FaFileArrowDown />
                  </div>
                  <div>
                    <h4 className='text-xl md:text-2xl xl:text-3xl font-bold text-white'>
                      See Whats latest Update
                    </h4>

                    <div className='card-actions'>
                      <button className='btn secondary-btn'>Jump</button>
                    </div>
                  </div>
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
