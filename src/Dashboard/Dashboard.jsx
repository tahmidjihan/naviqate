import React from 'react';

function Dashboard() {
  return (
    <div className='bg-white min-h-screen w-full'>
      <div className='p-10'>
        <h2 className='text-2xl'>Dashboard</h2>
        <div className='py-2'>
          <div className='card rounded-3xl bg-base-100 w-full cyan-shadow'>
            <div className='card-body'>
              <h2 className='card-title font-bold text-2xl'>Databases</h2>
              <div>
                <div className='overflow-x-auto'>
                  <table className='dashboard-table w-full font-semibold text-md'>
                    <thead>
                      <tr>
                        <td colSpan={4} className='py-2'>
                          <div
                            className={`flex items-center justify-between px-6 py-3`}
                          >
                            <div className='w-1/12'>#</div>
                            <div className='w-3/12'>Name</div>
                            <div className='w-3/12'>Data</div>
                            <div className='w-2/12'>Undone</div>
                            <div className='w-3/12'>Last updated</div>
                            <div className='w-3/12'>Status</div>
                            <div className='w-5/12'></div>
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {[
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
                      ].map((item, i) => {
                        return (
                          <tr key={i}>
                            <td colSpan={4} className='py-2'>
                              <div
                                className={`flex items-center justify-between px-6 py-3 bg-gray-100 rounded-full shadow-sm`}
                              >
                                <div className='w-1/12'>{i + 1}</div>
                                <div className='w-3/12'>{item.name}</div>
                                <div className='w-3/12'>{item.data}</div>
                                <div className='w-2/12'>{item.undone}</div>
                                <div className='w-3/12'>{item.lastUpdated}</div>
                                <div
                                  className={`w-3/12 px-3 py-1 bg-${
                                    item.status !== 'active' ? 'red' : 'cyan'
                                  }-200 rounded-lg`}
                                >
                                  {item.status}
                                </div>
                                <div className='w-5/12 text-cyan font-bold text-right'>
                                  See more
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
