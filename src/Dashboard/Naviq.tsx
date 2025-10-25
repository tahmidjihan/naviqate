import DashboardHeader from '@/Components/DashboardHeader';

function Naviq() {
  return (
    <div className='flex flex-col h-full'>
      <DashboardHeader />
      <div className='flex flex-col'>
        <div className='p-5 border min-h-[80vh] border-cyan-200 rounded-2xl bg-cyan-50'>
          <div className=''>
            <h3 className='font-bold mb-2 ubuntu-font text-2xl'>
              Project Title
            </h3>
            <p className='text-gray-600'>
              This is a brief description of the project. It gives an overview
              of what the project is about.
            </p>
          </div>
        </div>
        <div className='flex justify-center  md:justify-between items-center py-2 md:px-5 flex-col lg:flex-row my-5 bg-cyan-50 border border-cyan-200 rounded-2xl '>
          <h2>Write your prompt here.</h2>
          <button className='bg-cyan-600 cursor-pointer text-white px-5 py-1 rounded-2xl text-lg hover:bg-cyan-700 transition'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Naviq;
