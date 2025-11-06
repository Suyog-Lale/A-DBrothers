
import React from 'react';

const servicesData = [
  {
    title: 'Sandblasting & Painting',
    description: 'We handle all types of blasting, including Grit, Copper Slag, and Shot Blasting. We provide expert painting and coating works for marine shipbuilding, pipelines, and storage tanks.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
  },
  {
    title: 'Fabrication',
    description: 'We specialize in custom metal fabrication for industrial needs, including street structures, pressure vessels, and fuel tankers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /></svg>
    ),
  },
  {
    title: 'Specialized Industrial Services',
    description: 'Our capabilities also include Guniting, power tooling, high-pressure washing, and structural steel services.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 font-montserrat text-brand-gold">Our Expert Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-brand-gray p-8 rounded-lg border-2 border-brand-gold/20 hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-2 shadow-lg">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 font-montserrat text-white">{service.title}</h3>
              <p className="text-brand-silver leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
