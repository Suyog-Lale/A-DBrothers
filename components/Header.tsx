import React from 'react';

/**
 * This is the updated Header component.
 * It's based on your screenshot, but with the "About" link removed.
 */
const Header: React.FC = () => {
  // We assume your styles (e.g., brand colors) are in your main CSS or Tailwind config
  return (
    <header className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <h1 className="text-2xl font-bold text-yellow-400">A&D Brothers</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            {/* <li><a href="#about">About</a></li> --- THIS LINK IS NOW REMOVED --- */}
            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#work" className="hover:text-yellow-400">Our Work</a></li>
            <li><a href="#clients" className="hover:text-yellow-400">Clients</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;