
import React from 'react';

const GalleryItem: React.FC<{ type: 'image' | 'video'; src: string; index: number }> = ({ type, src, index }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img src={src} alt={`Project work ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
        {type === 'video' && (
          <div className="w-16 h-16 bg-brand-gold/80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

const OurWork: React.FC = () => {
  const items = [
    { type: 'image', src: 'https://picsum.photos/600/400?random=11' },
    { type: 'video', src: 'https://picsum.photos/600/400?random=12' },
    { type: 'image', src: 'https://picsum.photos/600/400?random=13' },
    { type: 'image', src: 'https://picsum.photos/600/400?random=14' },
    { type: 'image', src: 'https://picsum.photos/600/400?random=15' },
    { type: 'video', src: 'https://picsum.photos/600/400?random=16' },
    { type: 'image', src: 'https://picsum.photos/600/400?random=17' },
    { type: 'image', src: 'https://picsum.photos/600/400?random=18' },
  ];

  return (
    <section id="our-work" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 font-montserrat text-brand-gold">Our Completed Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <GalleryItem key={index} type={item.type as 'image' | 'video'} src={item.src} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
