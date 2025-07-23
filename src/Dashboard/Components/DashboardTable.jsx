import React from 'react';
import { useAuth } from '../../AuthProvider';
import axios from 'axios';

export const data = [
  {
    name: 'Sales',
    data: 1345,
    undone: 7,
    lastUpdated: '2025. 07.05',
    status: 'active',
  },
  {
    name: 'Queries',
    data: 2434,
    undone: 10,
    lastUpdated: '2025. 07.02',
    status: 'active',
  },
  {
    name: 'sales II',
    data: 2434,
    undone: 10,
    lastUpdated: '2025. 03.25',
    status: 'Paused',
  },
  {
    name: 'Newsletter',
    data: 1145,
    undone: 27,
    lastUpdated: '2025. 03.25',
    status: 'active',
  },
  {
    name: 'Requests',
    data: 200,
    undone: 0,
    lastUpdated: '2025. 03.25',
    status: 'Paused',
  },
  {
    name: 'test',
    data: 200,
    undone: 0,
    lastUpdated: '2025. 03.25',
    status: 'Paused',
  },
];

function DashboardTable({ count, lastUpdate }) {
  const { getUserData } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await getUserData;
    const data = {
      name: e.target.name.value,
      company_id: getUserData.company_id,
    };
    axios.post(`http://localhost:3000/createDatabases`, data).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className='card w-full rounded-3xl bg-white card-xl cyan-shadow lg:h-full lg:min-w-1/2'>
      <div className='card-body'>
        <h2 className='card-title font-bold text-2xl'>Databases</h2>
        <div>
          <div className='overflow-x-auto'>
            <table className='min-w-full text-xs md:text-lg font-bold text-gray-600'>
              <thead>
                <tr>
                  <th className='px-3 py-2 text-left'>#</th>
                  <th className='px-3 py-2 text-left'>Name</th>
                  <th className='px-3 py-2 text-left'>Data</th>
                  <th className='px-3 py-2 text-left'>Undone</th>
                  {lastUpdate && (
                    <th className='px-3 py-2 text-left'>Last Updated</th>
                  )}
                  <th className='px-3 py-2 text-left'>Status</th>
                  <th className='px-3 py-2 text-right hidden md:table-cell'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='text-gray-400'>
                {data
                  .slice(0, count ? parseInt(count) : data.length)
                  .map((item, i) => (
                    <tr
                      key={i}
                      className='bg-gray-100 rounded-xl shadow-sm my-2'
                    >
                      <td className='px-5 py-3 rounded-l-full'>{i + 1}</td>
                      <td className='px-5 py-3'>{item.name}</td>
                      <td className='px-5 py-3'>{item.data}</td>
                      <td className='px-5 py-3'>{item.undone}</td>
                      {lastUpdate && (
                        <td className='px-5 py-3'>{item.lastUpdated}</td>
                      )}
                      <td className='px-5 py-3'>
                        <span
                          className={`px-5 py-1 text-xs font-semibold rounded-full ${
                            item.status === 'active'
                              ? 'bg-cyan-200 text-cyan-800'
                              : 'bg-red-200 text-red-800'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className='px-3 py-3 text-right hidden md:table-cell rounded-r-full'>
                        <span className='text-cyan-600 font-semibold'>
                          See more
                        </span>
                      </td>
                    </tr>
                  ))}

                <tr>
                  <td colSpan={lastUpdate ? 7 : 6} className='py-3'>
                    <button
                      onClick={() =>
                        document.getElementById('my_modal_3').showModal()
                      }
                      className='btn bg-cyan text-white text-center rounded-full w-full'
                    >
                      Make A New One
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className='btn'
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        open modal
      </button> */}
      <dialog id='my_modal_3' className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>Make a Database!</h3>
          {/* <p className='py-4'>Press ESC key or click on ✕ button to close</p> */}
          <div className='my-5'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              {' '}
              <input
                type='text'
                className='input focus:outline-none w-full focus:border-0 focus:ring-3 focus:ring-cyan-500'
                placeholder='Type the database name'
                name='name'
                required
              />
              <button className='btn my-2 primary-btn w-full'>
                Make Database
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default DashboardTable;
