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
