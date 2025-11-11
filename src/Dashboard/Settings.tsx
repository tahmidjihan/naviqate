import DashboardHeader from '@/Components/DashboardHeader';

function Settings() {
  function Card({ className }: { className?: string }) {
    return (
      <div
        className={`flex justify-center md:justify-between items-center py-2 md:px-5 flex-col lg:flex-row bg-rose-50 border border-rose-200 rounded-2xl ${className}`}
      >
        <h2>This is a setting option</h2>
        <div className='scale-50'>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input type='checkbox' defaultValue='' className='sr-only peer' />
            <div className="group peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-300 w-16 h-8 shadow-md peer-checked:bg-rose-600 peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
          </label>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className='flex flex-col mx-auto shadow-lg w-full h-full m-5 rounded-2xl lg:w-9/12 px-5'>
        <DashboardHeader />
        <div className='grid grid-cols-4 gap-5 my-10'>
          {Array.from({ length: 4 }).map((_, index) => (
            <Card className='col-span-4' key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Settings;
