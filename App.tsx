
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-brand-silver font-roboto">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <OurWork />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
