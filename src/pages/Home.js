import React from 'react';
import Navbar from '../components/Navbar';
import Benefits from '../components/Benefits';
import '../stylesheets/Home.css'; 
import HeroSection from '../components/HeroSection';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Benefits /> 
      {/* <HowItWorks />
      <Features />
      <Footer /> */}
    </>
  );
}

export default Home;