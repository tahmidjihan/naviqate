import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import WhyChoose from './Components/WhyChoose';
import OurServices from './Components/OurServices';
import Pricing from './Components/Pricing';
import Destinations from './Components/Destinations';
import { useEffect, useState } from 'react';
import LoadingScreen from './Components/LoadingScreen';

function App() {
  // This will be a temporary component to make the mvp work
  // it will be organized later
  const [pending, setPending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPending(false);
    }, 1000);
  });
  if (pending) {
    return <LoadingScreen />;
  }
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <AboutUs />
        <WhyChoose />
        <OurServices />
        <Pricing />
        <Destinations />
        <Footer />
      </div>
    </>
  );
}

export default App;
