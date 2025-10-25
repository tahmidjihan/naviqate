import DisplayCard from '@/Components/DisplayCards';
import DashboardHeader from '../Components/DashboardHeader';

function Dashboard() {
  return (
    <div className='flex flex-col'>
      <DashboardHeader />
      <div className='grid grid-cols-4 gap-5'>
        {Array.from({ length: 4 }).map((_, index) => (
          <DisplayCard className='col-span-1' key={index} />
        ))}
        <DisplayCard className='col-span-2 row-span-2' />
        <div className='flex flex-col gap-5 col-span-2'>
          {Array.from({ length: 2 }).map((_, index) => (
            <DisplayCard className='col-span-2' key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
