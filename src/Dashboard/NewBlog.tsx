import DashboardHeader from '@/Components/DashboardHeader';
import BlogForm from '@/Components/BlogForm';

function NewBlog() {
  return (
    <div className='flex flex-col h-full'>
      <DashboardHeader />
      <div className='flex flex-col'>
        <BlogForm />
      </div>
    </div>
  );
}

export default NewBlog;
