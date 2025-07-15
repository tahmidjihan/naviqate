import React from 'react';

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

function DashboardTable({ count, lastUpdate, addNew }) {
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
                {addNew && (
                  <tr>
                    <td colSpan={lastUpdate ? 7 : 6} className='py-3'>
                      <div className='btn bg-cyan text-white text-center rounded-full w-full'>
                        Make A New One
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTable;
