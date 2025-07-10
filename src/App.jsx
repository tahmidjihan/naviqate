import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import WhyChoose from './Components/WhyChoose';

function App() {
  // This will be a temporary component to make the mvp work
  // it will be organized later

  return (
    <>
      <div className='bg-base min-h-screen '>
        <Navbar />
        <Hero />
        <AboutUs />
        <WhyChoose />
        <Footer />
      </div>
    </>
  );
}

export default App;
