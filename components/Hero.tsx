
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581292176953-855c14bab73a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold font-montserrat tracking-tight mb-4 text-shadow-lg">
          <span className="text-white">A&D</span> <span className="text-brand-gold">Brothers</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold font-montserrat tracking-widest text-brand-silver uppercase">
          Fabrication • Sandblasting • Protective Coating
        </h2>
        <button
          onClick={scrollToContact}
          className="mt-8 px-8 py-3 bg-brand-gold text-black font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default Hero;
