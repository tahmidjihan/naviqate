import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  // This will be a temporary component to make the mvp work
  // it will be organized later

  return (
    <>
      <div className='bg-base-200 min-h-screen z-[-120]'>
        <div className='container max-w-screen-xl overflow-hidden mx-auto relative shadow-[0px_0px_60px] shadow-cyan-500/50'>
          <Navbar />
          <Hero />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
