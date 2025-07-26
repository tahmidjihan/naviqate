import React, { useEffect } from 'react';
import { useAuth } from '../../AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function DashboardTable({ count, lastUpdate }) {
  const { getUserData } = useAuth();
  const { data: databases = [], refetch } = useQuery({
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
  useEffect(() => {
    // console.log(databases);
    refetch();
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await getUserData;
    const data = {
      name: e.target.name.value,
      company_id: getUserData.company_id,
    };
    axios
      .post(`${import.meta.env.VITE_BACKEND}/createDatabases`, data)
      .then((res) => {
        console.log(res);
      });
  };
  function getData(data) {
    return (
      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>Add data !</h3>
          <p className='py-4'>Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    );
  }
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
                {databases != [] &&
                  Array.isArray(databases) &&
                  databases
                    .slice(0, count ? parseInt(count) : databases.length)
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
                          <span
                            onClick={() =>
                              document.getElementById('my_modal_2').showModal()
                            }
                            className='text-cyan-600 font-semibold cursor-pointer'
                          >
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

      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>Get data !</h3>
          <p className='py-4'>Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
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
