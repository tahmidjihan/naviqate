import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div>
        <div className='mx-auto container bg-linear-30'>
          <Navbar />
          <div className='min-h-[70vh] flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-6 max-w-4xl text-center px-4'>
              <span className='bg-cyan-100 rounded-3xl'>
                Try Naviqate for free for the first time.
              </span>
              <h1 className='text-6xl ubuntu-font '>
                Easy use Tech with Naviqate
              </h1>
              <p className='text-xl text-gray-600'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                aut sint commodi labore, dolorum eligendi nulla quam, animi
                molestiae recusandae cum asperiores odio quisquam. Illum dolorum
                harum nemo accusantium itaque.
              </p>
              <div className='flex gap-2 items-center justify-center'>
                <button className='bg-cyan-600 cursor-pointer text-white px-6 py-3 rounded-2xl text-lg hover:bg-cyan-700 transition'>
                  Get Started
                </button>
                <button className='border-cyan-600 border-3 cursor-pointer text-cyan-600 px-6 py-3 rounded-2xl text-lg hover:bg-gray-200 transition'>
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
