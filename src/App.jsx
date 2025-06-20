import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import FeaturesTable from './Components/FeaturesTable';
import BookNow from './Components/BookNow';
import FAQ from './Components/FAQ';

function App() {
  // This will be a temporary component to make the mvp work
  // it will be organized later

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesTable />
      <BookNow />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
