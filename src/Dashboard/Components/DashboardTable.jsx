import React, { useEffect, useState } from 'react';
import { useAuth } from '../../AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import GetData from './getData';

function DashboardTable({ count, lastUpdate }) {
  const [loading, setLoading] = useState(true);
  const { userData } = useAuth();
  const { data: databases = [], refetch } = useQuery({
    queryKey: ['databases'],
    queryFn: () =>
      axios
        .get(`/getDatabases?id=${userData.company_id}`)
        .then((res) => res.data),
  });

  useEffect(() => {
    refetch();
  }, [userData, databases]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      company_id: userData.company_id,
    };
    await axios.post(`/createDatabases`, data);
    refetch();
    document.getElementById('my_modal_3').close();
  };

  useEffect(() => {
    if (databases) {
      setLoading(false);
    }
  }, [databases]);

  if (loading) {
    return <p> loading...</p>;
  }

  return (
    <div className='card w-full rounded-3xl bg-white card-xl cyan-shadow lg:h-full'>
      <div className='card-body p-5 sm:p-7'>
        <h2 className='card-title font-bold text-xl md:text-2xl'>Databases</h2>

        <div className='overflow-x-auto'>
          <table className='min-w-full text-sm md:text-base text-gray-700'>
            <thead className='bg-gray-100 text-left'>
              <tr>
                <th className='px-4 py-3'>#</th>
                <th className='px-4 py-3'>Name</th>
                <th className='px-4 py-3'>Data</th>
                <th className='px-4 py-3'>Undone</th>
                {lastUpdate && <th className='px-4 py-3'>Last Updated</th>}
                <th className='px-4 py-3'>Status</th>
                <th className='px-4 py-3 text-right hidden md:table-cell'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(databases) &&
                databases
                  .slice(0, count ? parseInt(count) : databases.length)
                  .map((item, i) => (
                    <tr
                      key={item.id}
                      className='bg-gray-100 rounded-full shadow-sm my-2'
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
                    className='btn bg-cyan text-white text-center font-bold rounded-full w-full'
                  >
                    Make A New One
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal - Kept your exact structure */}
      <dialog id='my_modal_3' className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>Make a Database!</h3>
          <div className='my-5'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
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
