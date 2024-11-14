import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Research from './components/Research';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Matrix-style background */}
      <div className="matrix-bg"></div>
      
      {/* Neural network nodes */}
      <div className="neural-nodes"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <Hero />
          <Experience />
          <Research />
          <Skills />
          <Interests />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;