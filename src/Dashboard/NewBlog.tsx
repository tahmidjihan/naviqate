import DashboardHeader from '@/Components/DashboardHeader';
import BlogForm from '@/Components/BlogForm';

function NewBlog() {
  return (
    <div className='flex flex-col h-full'>
      <DashboardHeader />
      <div className='flex flex-col'>
        {/* <div className='p-5 border min-h-[80vh] border-cyan-200 rounded-2xl bg-cyan-50'>
          <div className=''>
            <h3 className='font-bold mb-2 ubuntu-font text-2xl'>
              Project Title
            </h3>
            <p className='text-gray-600'>
              This is a brief description of the project. It gives an overview
              of what the project is about.
            </p>
          </div>
        </div> */}
        <BlogForm />
      </div>
    </div>
  );
}

export default NewBlog;
