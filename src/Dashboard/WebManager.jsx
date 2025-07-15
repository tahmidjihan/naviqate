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
        <div className='py-2 flex flex-col lg:grid grid-cols-1 lg:grid-cols-3 gap-5'>
          <div className='col-span-1 lg:col-span-2'>
            <div className='card w-full rounded-3xl cyan-shadow bg-base-100 card-xl shadow-sm'>
              <div className='card-body w-full'>
                <h2 className='font-bold text-2xl md:text-4xl mx-2 md:mx-5 my-2 text-gray-600'>
                  Visits On Last Week
                </h2>
                <div className='w-full h-full'>
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
          </div>

          <div className='flex flex-col gap-5 col-span-1'>
            <div className='card rounded-3xl cyan-shadow bg-base-100 w-full min-w-[250px] xl:min-w-xs h-full'>
              <div className='card-body flex-row items-center align-middle'>
                <div>
                  <h4 className='text-2xl font-bold text-gray-700'>Status</h4>
                  <h2 className='text-xl rounded-2xl font-bold flex items-center gap-1'>
                    <span className='w-5 h-5 inline-block rounded-full bg-cyan-500'></span>{' '}
                    Online
                  </h2>
                  <div className='relative my-5 mx-5'>
                    <input
                      type='checkbox'
                      defaultChecked
                      className='toggle toggle-info scale-200 my-2'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='card rounded-3xl cyan-shadow bg-cyan w-full min-w-[250px] xl:min-w-xs h-full'>
              <div className='card-body flex-row items-center align-middle'>
                <div>
                  <h4 className='text-2xl xl:text-3xl font-bold text-white'>
                    Update Logs
                  </h4>
                  <span className='text-lg text-gray-200'>
                    Check the updates you done on the website Here
                  </span>
                  <div className='card-actions'>
                    <button className='btn secondary-btn my-2'>Jump</button>
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
                className='textarea textarea-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-0'
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
