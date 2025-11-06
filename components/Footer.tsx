
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-brand-silver">&copy; {new Date().getFullYear()} <span className="font-bold text-white">A&D</span> <span className="font-bold text-brand-gold">Brothers</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
