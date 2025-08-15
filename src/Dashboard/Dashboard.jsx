import React from 'react';
import DashboardTable from './Components/DashboardTable';
import { FaCircleInfo, FaFileArrowDown } from 'react-icons/fa6';
import {
  Bar,
  ResponsiveContainer,
  Tooltip,
  BarChart,
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
      <div className='p-4 my-10 md:p-10 overflow-x-hidden container'>
        <h2 className='text-xl md:text-2xl mb-6'>Dashboard</h2>

        {/* Main Grid Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
          {/* Chart Section - Takes 8/12 cols on lg+ screens */}
          <div className='lg:col-span-8 xl:col-span-9'>
            <div className='card rounded-3xl cyan-shadow bg-base-100 h-full'>
              <div className='card-body p-4 md:p-6'>
                <h2 className='font-bold text-2xl md:text-3xl mb-4 text-gray-600'>
                  Visits On Last Year
                </h2>
                <div className='h-[300px]'>
                  <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                      data={data}
                      margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                    >
                      <Bar
                        dataKey='users'
                        fill='#00bbc1'
                        radius={[4, 4, 0, 0]}
                      />
                      <XAxis dataKey='name' tickMargin={10} />
                      <YAxis tickMargin={10} />
                      <Tooltip
                        contentStyle={{
                          borderRadius: '12px',
                          border: 'none',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards Section - Takes 4/12 cols on lg+ screens */}
          <div className='lg:col-span-4 xl:col-span-3 flex flex-col gap-5'>
            {/* Total Visits Card */}
            <div className='card rounded-3xl cyan-shadow bg-base-100 flex-1'>
              <div className='card-body p-5 flex flex-row items-center'>
                <div className='text-4xl lg:text-5xl xl:text-6xl text-cyan-500 mr-4'>
                  <FaCircleInfo />
                </div>
                <div>
                  <h4 className='text-base md:text-lg font-bold text-gray-700 mb-1'>
                    Total visits
                  </h4>
                  <h2 className='text-2xl lg:text-3xl xl:text-4xl font-bold'>
                    1,742+
                  </h2>
                </div>
              </div>
            </div>

            {/* Updates Card */}
            <div className='card rounded-3xl cyan-shadow bg-cyan-500 flex-1'>
              <div className='card-body p-5 flex flex-row items-center'>
                <div className='text-4xl lg:text-5xl xl:text-6xl text-white mr-4'>
                  <FaFileArrowDown />
                </div>
                <div>
                  <h4 className='text-lg md:text-xl xl:text-xl font-bold text-white mb-2'>
                    See What's New
                  </h4>
                  <button className='btn secondary-btn bg-white text-cyan-600 hover:bg-gray-100 font-medium'>
                    Jump
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Table Section */}
        <div className='mt-8'>
          <DashboardTable count={3} lastUpdate={true} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
