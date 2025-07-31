import React, { useEffect, useState } from 'react';
import { useAuth } from '../../AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import LoadingScreen from '../../Components/LoadingScreen';

function DashboardTable({ count, lastUpdate }) {
  const [loading, setLoading] = useState(true);
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
    refetch();
  };
  useEffect(() => {
    if (databases) {
      setLoading(false);
    }
  });
  if (loading) {
    return <LoadingScreen />;
  }
  function GetData({ id }) {
    return (
      <>
        <span
          onClick={() =>
            document.getElementById(`data_modal_${id}`).showModal()
          }
          className='text-cyan-600 font-semibold cursor-pointer'
        >
          See more
        </span>
        <dialog id={`data_modal_${id}`} className='modal text-start'>
          <div className='modal-box'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2'>
                ✕
              </button>
            </form>
            <h3 className='font-bold text-lg'>Add data !</h3>
            <div>
              <div className='overflow-x-auto s-table rounded-box border border-base-content/5 bg-base-100'>
                <table className='table'>
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className='py-4'>Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      </>
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
                        key={item.id}
                        className='bg-gray-100 rounded-xl shadow-sm my-2'
                      >
                        <td className='px-5 py-3 rounded-l-full'>{i + 1}</td>
                        <td className='px-5 py-3'>{item.name}</td>
                        <td className='px-5 py-3'>{item.total_data}</td>
                        <td className='px-5 py-3'>{item.total_undone}</td>
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
                          <GetData id={item?.id} />
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
