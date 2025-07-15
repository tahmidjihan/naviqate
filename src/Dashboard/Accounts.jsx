import React from 'react';
import { FaRegFile } from 'react-icons/fa';
export const users = [
  { id: 1, name: 'Dua L.', email: 'me@dualipa.com', role: 'Admin' },
  { id: 2, name: 'Sia', email: 'me@siamusic.com', role: 'Admin' },
  { id: 3, name: 'Alan W.', email: 'alan@djwalkerzz.com', role: 'Admin' },
  { id: 4, name: 'Ed Sh.', email: 'ed@sheeran.com', role: 'Mod' },
  { id: 5, name: 'Sabrina C.', email: 'sbrna@carpenter.com', role: 'Mod' },
  { id: 6, name: 'James A.', email: 'james@arthur.com', role: 'Mod' },
  { id: 7, name: 'Selena G.', email: 'selena@gomez.com', role: 'Mod' },
  { id: 8, name: 'Ann M.', email: 'Anne@marie.com', role: 'Mod' },
  { id: 9, name: 'Charlie P.', email: 'Charlie@puth.com', role: 'Mod' },
  { id: 10, name: 'Shawn M.', email: 'shawn@mandes.com', role: 'Mod' },
  { id: 11, name: 'Eminem', email: 'rap@eminem.com', role: 'Mod' },
];

function Accounts() {
  const count = 5;
  return (
    <div className='bg-white min-h-screen w-full'>
      <div className='p-4 my-10 md:p-10 overflow-x-hidden container'>
        <h2 className='text-xl md:text-2xl'>Accounts</h2>
        <div className='py-2 grid grid-cols-1 lg:grid-cols-5 gap-5'>
          <div className='col-span-1 lg:row-span-2 lg:col-span-2 relative'>
            <div className='card w-full  rounded-3xl cyan-shadow bg-base-100 card-xl shadow-sm'>
              <div className='card-body'>
                <div className='flex items-end'>
                  <div className='rounded-full max-w-[180px] max-h-[180px] overflow-hidden mx-4'>
                    <img
                      src='.././Assets/icon.png'
                      className='hue-rotate-180 grayscale-50'
                      alt='Accounts'
                    />
                  </div>
                  <div className='rounded-full max-w-[100px] max-h-[100px] overflow-hidden mx-4'>
                    <img src='./../Assets/DuaLipa.png' className='' alt='' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='flex flex-col my-3'>
                    <span className='font-bold mt-3 text-lg md:text-2xl text-black'>
                      Not Naviqate
                    </span>
                    <span className='text-lg md:text-2xl text-gray-600'>
                      Dua Lipa
                    </span>
                  </div>
                  <p>
                    <b className='font-bold text-black'>Company Email:</b>
                    not@naviqate.com
                  </p>
                  <p>
                    <b className='font-bold text-black'>User Email:</b>{' '}
                    me@dualipa.com
                  </p>
                  <p>
                    <b className='font-bold text-black'>Role:</b> Admin
                  </p>
                  <p>
                    <b className='font-bold text-black'>ID:</b> 2833649093
                  </p>
                </div>
              </div>
              <img src='.././Assets/mountains.png' className='mx-5' alt='' />
            </div>
          </div>
          <div className='flex flex-col gap-5 lg:col-span-3'>
            <div className='card rounded-3xl cyan-shadow bg-cyan w-full min-w-[250px] xl:min-w-xs h-full'>
              <div className='card-body flex-row items-center align-middle'>
                <div className='flex'>
                  <div className='text-4xl lg:text-9xl text-white'>
                    <FaRegFile />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-xl md:text-2xl font-bold text-white'>
                      Plan
                    </span>
                    <span className='text-sm md:text-lg text-white font-bold'>
                      Business
                    </span>
                    <span className='text-sm md:text-lg text-gray-200'>
                      Expires at 16 Aug
                    </span>
                    <div className='card-actions'>
                      <button className='btn bg-white text-cyan-500 font-bold rounded-full px-4 btn-sm'>
                        Extend
                      </button>
                    </div>
                  </div>
                  <div class='divider lg:divider-horizontal mx-2'></div>
                  <div>
                    <span className='text-xl md:text-2xl font-bold text-yellow-400'>
                      Danger
                    </span>
                    <div className='card-actions flex flex-col mt-3'>
                      <button className='btn bg-white text-cyan-500 font-bold rounded-full px-4 btn-sm'>
                        Freeze Account
                      </button>
                      <button className='btn bg-white text-cyan-500 font-bold rounded-full px-4 btn-sm'>
                        UnSubscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card rounded-3xl cyan-shadow bg-white w-full min-w-[250px] xl:min-w-xs h-full'>
              <div className='card-body flex-col'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-2xl md:text-4xl font-bold'>Sharing</h1>
                  <span className='text-lg md:text-2xl font-bold text-cyan-500'>
                    See all
                  </span>
                </div>
                <div>
                  <div className='overflow-x-auto'>
                    <table className='dashboard-table w-full text-gray-500 text-xl'>
                      <thead>
                        <tr>
                          <td colSpan={4} className='py-2'>
                            <div
                              className={`flex items-center justify-between px-6 py-3`}
                            >
                              <div className='w-1/12'>#</div>
                              <div className='w-2/12'>Name</div>
                              <div className='w-4/12'>Email</div>
                              <div className='w-3/12'>Role</div>
                            </div>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {users
                          .slice(0, count ? count : data.length)
                          .map((item, i) => {
                            return (
                              <tr key={i}>
                                <td colSpan={4} className='py-2'>
                                  <div
                                    className={`flex items-center justify-between px-6 py-2 bg-gray-100 rounded-full shadow-sm`}
                                  >
                                    <div className='w-1/12'>{i + 1}</div>
                                    <div className='w-2/12'>{item.name}</div>
                                    <div className='w-4/12'>{item.email}</div>
                                    <div className='w-3/12'>{item.role}</div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}

                        <tr>
                          <td colSpan={4} className='py-2'>
                            <div
                              className={`flex items-center btn justify-between px-6 py-2 bg-cyan text-center text-white font-bold text-xl rounded-full shadow-sm`}
                            >
                              Make A New One
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
