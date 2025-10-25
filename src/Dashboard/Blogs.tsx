import DisplayCard from '@/Components/DisplayCards';
import DashboardHeader from '../Components/DashboardHeader';
function Blogs() {
  return (
    <div className='flex flex-col h-full'>
      <DashboardHeader />
      <div className='grid grid-cols-4 gap-5'>
        {/* {Array.from({ length: 4 }).map((_, index) => (
          <DisplayCard className='col-span-1' key={index} />
        ))} */}
        <DisplayCard className='col-span-2 ' />
        <div className='flex flex-col gap-5 col-span-2'>
          {Array.from({ length: 3 }).map((_, index) => (
            <DisplayCard className='col-span-2' key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
