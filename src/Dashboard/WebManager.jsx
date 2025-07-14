import React from 'react';
import { FaCircleInfo, FaFileArrowDown } from 'react-icons/fa6';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function WebManager() {
  const data = [
    { name: 'Sun', users: 20 },
    { name: 'Mon', users: 8 },
    { name: 'Tue', users: 5 },
    { name: 'Wed', users: 13 },
    { name: 'Thu', users: 15 },
    { name: 'Fri', users: 33 },
    { name: 'Sat', users: 20 },
  ];
  return (
    <div className='bg-white min-h-screen w-full'>
      <div className='p-4 my-10 md:p-10 overflow-x-hidden container'>
        <h2 className='text-xl md:text-2xl'>Web Manager</h2>
        <div className='py-2 grid grid-cols-1 lg:grid-cols-3 gap-5'>
          <div className='col-span-1 lg:col-span-2'>
            <div className='card w-full  rounded-3xl cyan-shadow bg-base-100 card-xl shadow-sm'>
              <div className='card-body'>
                <h2 className='font-bold text-2xl md:text-4xl mx-2 md:mx-5 my-2 text-gray-600'>
                  Visits On Last Week
                </h2>
                <ResponsiveContainer width='100%' height={300}>
                  <AreaChart data={data}>
                    <Area dataKey='users' fill='#00bbc1' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
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
          <div className='card w-full col-span-3  rounded-3xl cyan-shadow bg-base-100 card-xl shadow-sm'>
            <div className='card-body'>
              <h2 className='text-lg font-bold my-2 text-gray-600'>
                Request For Edit
              </h2>
              <textarea
                placeholder='Type your message here'
                rows={4}
                className='textarea textarea-lg w-full'
              ></textarea>
              <div className='flex justify-between'>
                <input type='file' className='file-input file-input-sm my-2' />
                <button className='btn primary-btn'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebManager;
