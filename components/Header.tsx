
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Services', 'Our Work', 'Clients', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-brand-gold/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold font-montserrat">
          <span className="text-white">A&D</span> <span className="text-brand-gold">Brothers</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
              className="text-white hover:text-brand-gold transition-colors duration-300 font-medium tracking-wider"
            >
              {link}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black">
          <nav className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                className="text-white py-2 hover:text-brand-gold transition-colors duration-300"
              >
                {link}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
