
import React from 'react';

const shipyardClients = [
  "Ram Ratan infrastructure",
  "Panamatrics engineering",
  "Inland Marine Works",
  "Saibaba Shipyard",
  "Uran Shipyard"
];

const industrialClients = [
  "Bridge & Roof",
  "Punja LLoyd Ltd",
  "U.B Engineering Ltd",
  "Das Offshore Ltd",
  "Technofab Engineering Ltd",
  "Hi-Techno Crats Ltd",
  "United Envirotech Ltd"
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 font-montserrat text-brand-gold">Our Valued Clients</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-2xl font-semibold mb-6 text-center text-white border-b-2 border-brand-gold pb-2">Shipyard</h3>
            <ul className="space-y-3 text-center">
              {shipyardClients.map((client, index) => (
                <li key={index} className="text-lg text-brand-silver">{client}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-2xl font-semibold mb-6 text-center text-white border-b-2 border-brand-gold pb-2">Industrial & Project Services</h3>
            <ul className="space-y-3 text-center">
              {industrialClients.map((client, index) => (
                <li key={index} className="text-lg text-brand-silver">{client}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
