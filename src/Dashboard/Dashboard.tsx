import DisplayCard from '@/Components/DisplayCards';
import DashboardHeader from '../Components/DashboardHeader';
import websiteData from '@/assets/websiteData.json';
import { DynamicIcon } from 'lucide-react/dynamic';

function Dashboard() {
  return (
    <div className='flex flex-col'>
      <DashboardHeader />
      <div className='grid grid-cols-4 gap-5'>
        {websiteData.info.map((item, index) => (
          <DisplayCard
            resetClass
            className='col-span-1 bg-cyan-500 text-white '
            key={index}
          >
            <DynamicIcon
              // @ts-ignore
              name={item.icon}
              size={48}
            />
            <h3 className='font-extrabold ubuntu-font text-2xl my-2'>
              {item.title}
            </h3>
            <span className='text-xl text-gray-100 mb-5'>
              {item.description}
            </span>
            <span className='font-bold text-7xl ubuntu-font block'>
              {Array.isArray(item.data) ? item.data.length : item.data}
            </span>
          </DisplayCard>
        ))}
        <DisplayCard className='col-span-2 row-span-2'>
          <div className='h-full flex flex-col'>
            <div className='pt-5 pb-2 mb-3 border-b-2 border-cyan-600'>
              <h3 className='font-bold mb-2 ubuntu-font text-2xl'>
                New Messages
              </h3>
            </div>
            <div>
              <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
                  <thead className='text-xs text-gray-200 uppercase bg-cyan-500'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        Name
                      </th>

                      <th scope='col' className='px-6 py-3'>
                        Inbox
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Date
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        <span className='sr-only'>Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white border-b border-gray-200 hover:bg-gray-50'>
                      <th
                        scope='row'
                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                      >
                        John Doe
                      </th>

                      <td className='px-6 py-4'>Inquiry</td>
                      <td className='px-6 py-4'>11-9-2025</td>
                      <td className='px-6 py-4 text-right'>
                        <a
                          href='#'
                          className='font-medium text-cyan-600 hover:underline'
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <span className='text-cyan-600 cursor-pointer py-3 block mt-5'>
                See all messages
              </span>
            </div>
          </div>
        </DisplayCard>
        <div className='flex flex-col gap-5 col-span-2'>
          <DisplayCard className='col-span-2 row-span-2'>
            <div className='h-full flex flex-col'>
              <h3 className='font-bold mb-5 ubuntu-font text-2xl'>
                Project Overview
              </h3>
              <div className='flex-grow bg-white border border-gray-200 rounded-lg flex items-center justify-center'>
                {/* Placeholder for Chart */}
                <span className='text-gray-400'>[Chart Placeholder]</span>
              </div>
            </div>
          </DisplayCard>
          <DisplayCard className='col-span-2'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Name
                    </th>

                    <th scope='col' className='px-6 py-3'>
                      Category
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Date
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      <span className='sr-only'>View</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className='px-6 py-4'>Laptop</td>
                    <td className='px-6 py-4'>$2999</td>
                    <td className='px-6 py-4 text-right'>
                      <a
                        href='#'
                        className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DisplayCard>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
