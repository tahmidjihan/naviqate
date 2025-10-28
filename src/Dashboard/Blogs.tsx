import DisplayCard from '@/Components/DisplayCards';
import DashboardHeader from '../Components/DashboardHeader';
import BlogForm from '@/Components/BlogForm';
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';
function Blogs() {
  return (
    <div className='flex flex-col h-full'>
      <DashboardHeader />
      <div className='grid grid-cols-4 gap-5'>
        {/* {Array.from({ length: 4 }).map((_, index) => (
          <DisplayCard className='col-span-1' key={index} />
        ))} */}
        <DisplayCard className='col-span-3 '>
          <div>
            <div className='py-2 border-b-2 border-cyan-600'>
              <h3 className='font-bold ubuntu-font text-2xl'>Make a Blog</h3>
            </div>
            <div>
              <BlogForm />
            </div>
          </div>
        </DisplayCard>
        <div className='flex flex-col gap-5 col-span-1'>
          <DisplayCard className='col-span-1'>
            <div className='h-full flex flex-col'>
              <div className='py-5 border-b-2 border-cyan-600'>
                <h3 className='font-bold ubuntu-font text-2xl'>
                  Recent Blog Posts
                </h3>
              </div>
              <div>
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                  <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                      <tr>
                        <th scope='col' className='px-6 py-3'>
                          Product name
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Color
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Category
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          Price
                        </th>
                        <th scope='col' className='px-6 py-3'>
                          <span className='sr-only'>Edit</span>
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
                        <td className='px-6 py-4'>Silver</td>
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
                <span className='text-cyan-600 cursor-pointer py-3 block mt-5'>
                  Read all blog posts
                </span>
              </div>
            </div>
          </DisplayCard>
          {/* <DisplayCard className='col-span-2' /> */}
          {/* <DisplayCard className='col-span-2' /> */}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
[
  'Understanding React Hooks',
  'A Guide to Modern Web Development',
  'Top 10 JavaScript Frameworks in 2024',
  'The Power of Node.js',
  'The Future of Web Development',
  'Building RESTful APIs with Express.js',
  'CSS Grid vs. Flexbox: When to Use Which',
  'State Management in React: Redux vs. Context API',
  'Optimizing Web Performance: Tips and Tricks',
  'Getting Started with TypeScript',
];
