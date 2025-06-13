import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  // This will be a temporary component to make the mvp work
  // it will be organized later

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
