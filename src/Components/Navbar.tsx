function Navbar() {
  return (
    <div>
      <div className='mx-auto my-5 py-4 px-5 container items-center justify-between bg-cyan-50 border border-cyan-200 rounded-2xl w-full flex'>
        <div className=''>
          <img src='./Assets/icon.png' className='max-h-10' alt='' />
        </div>
        <div>
          <ul className='flex gap-5 items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blogs</li>
            <li>
              <button className='p-2 px-5 rounded-2xl text-white bg-cyan-600'>
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
