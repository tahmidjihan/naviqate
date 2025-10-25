function DashboardHeader() {
  return (
    <>
      <div className='flex justify-center  md:justify-between items-center py-2 md:px-10 flex-col lg:flex-row my-5 bg-cyan-50 border border-cyan-200 rounded-2xl '>
        <h2>Welcome back, Username!</h2>
        <button className='bg-cyan-600 cursor-pointer text-white px-5 py-1 rounded-2xl text-lg hover:bg-cyan-700 transition'>
          New Project
        </button>
      </div>
    </>
  );
}

export default DashboardHeader;
