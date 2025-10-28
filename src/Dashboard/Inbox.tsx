import DashboardHeader from '@/Components/DashboardHeader';
import DisplayCard from '@/Components/DisplayCards';
import { useState } from 'react';

function Inbox() {
  const [selectedInbox, setSelectedInbox] = useState(1);
  const inboxes = [
    { id: 1, name: 'Sales', total: 67, date: '11-9-2025' },
    { id: 2, name: 'Support', total: 45, date: '10-9-2025' },
    { id: 3, name: 'Marketing', total: 23, date: '09-9-2025' },
  ];
  const inboxMessages = [
    {
      id: 1,
      inbox: 1,
      data: [
        {
          sender: 'John Doe',
          message: 'Inquiry about product',
          date: '11-9-2025',
        },
        {
          sender: 'Jane Smith',
          message: 'Feedback on service',
          date: '11-9-2025',
        },
      ],
    },
    {
      id: 2,
      inbox: 2,
      data: [
        {
          sender: 'John Doe',
          message: 'Inquiry about product support',
          date: '11-9-2025',
        },
        {
          sender: 'Jane Smith',
          message: 'Feedback on service support',
          date: '11-9-2025',
        },
      ],
    },
    {
      id: 3,
      inbox: 3,
      data: [
        {
          sender: 'John Doe',
          message: 'Inquiry about product marketing',
          date: '11-9-2025',
        },
        {
          sender: 'Jane Smith',
          message: 'Feedback on service marketing',
          date: '11-9-2025',
        },
      ],
    },
  ];
  return (
    <div className='flex flex-col h-full'>
      <DashboardHeader />
      <div className='grid grid-cols-4 gap-5'>
        {/* {Array.from({ length: 4 }).map((_, index) => (
          <DisplayCard className='col-span-1' key={index} />
        ))} */}
        <DisplayCard className='col-span-2 '>
          <div className='h-full flex flex-col'>
            <div className='pt-5 pb-2 mb-3 border-b-2 border-cyan-600'>
              <h3 className='font-bold mb-2 ubuntu-font text-2xl'>
                New Messages
              </h3>
            </div>
            <div>
              <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
                  <thead className='text-xs text-gray-200 uppercase bg-cyan-500'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        Name
                      </th>

                      <th scope='col' className='px-6 py-3'>
                        Message
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        Date
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        <span className='sr-only'>Delete</span>
                      </th>
                      <th scope='col' className='px-6 py-3'>
                        <span className='sr-only'>View</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {inboxMessages
                      .find((inbox) => inbox.id === selectedInbox)
                      ?.data.map((message, index) => (
                        <tr
                          key={index}
                          className='bg-white border-b border-gray-200 hover:bg-gray-50'
                        >
                          <th
                            scope='row'
                            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                          >
                            {message.sender}
                          </th>

                          <td className='px-6 py-4'>{message.message}</td>
                          <td className='px-6 py-4'>{message.date}</td>
                          <td className='px-6 py-4 text-right'>
                            <a
                              href='#'
                              className='font-medium text-red-600 hover:underline'
                            >
                              Delete
                            </a>
                          </td>
                          <td className='px-6 py-4 text-right'>
                            <a
                              href='#'
                              className='font-medium text-cyan-600 hover:underline'
                            >
                              View
                            </a>
                          </td>
                        </tr>
                      ))}
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
          <DisplayCard
            className='col-span-2 min-h-[500px] border-2 shadow-xl'
            // resetClass
          >
            <div className='h-full flex flex-col'>
              <div className='py-2 mb-3 border-b-2 border-cyan-600'>
                <h3 className='font-bold mb-2 ubuntu-font text-2xl'>Inboxes</h3>
              </div>
              <div>
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                  <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-200 uppercase bg-cyan-500'>
                      <tr>
                        <th scope='col' className='px-6 py-3'>
                          Name
                        </th>

                        <th scope='col' className='px-6 py-3'>
                          Total
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Date
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          <span className='sr-only'>Open</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {inboxes.map((inbox) => (
                        <tr
                          key={inbox.id}
                          className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
                        >
                          <th
                            scope='row'
                            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                          >
                            {inbox.name}
                          </th>

                          <td className='px-6 py-4'>{inbox.total}</td>
                          <td className='px-6 py-4'>{inbox.date}</td>
                          <td className='px-6 py-4 text-right'>
                            <span
                              onClick={() => setSelectedInbox(inbox.id)}
                              className='font-medium text-cyan-600 dark:text-cyan-500 hover:underline cursor-pointer'
                            >
                              Open
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button className='text-black bg-cyan-500 hover:bg-cyan-600 my-2 w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-2'>
                  New Inbox
                </button>
              </div>
            </div>
          </DisplayCard>
          <div className='gap-5 col-span-2 grid grid-cols-2'>
            {/* {Array.from({ length: 4 }).map((_, index) => (
              <DisplayCard className='col-span-1' key={index} />
            ))} */}

            <DisplayCard className='col-span-1'></DisplayCard>
            <DisplayCard className='col-span-1'></DisplayCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
