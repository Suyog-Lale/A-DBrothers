
import React, { useState, useEffect } from 'react';

const images = [
  { src: 'https://picsum.photos/800/500?random=1', alt: 'Sandblasting', label: 'Sandblasting' },
  { src: 'https://picsum.photos/800/500?random=2', alt: 'Painting', label: 'Painting' },
  { src: 'https://picsum.photos/800/500?random=3', alt: 'Fabrication', label: 'Fabrication' },
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 font-montserrat text-brand-gold">About A&D Brothers</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full max-w-2xl mx-auto h-80 overflow-hidden rounded-lg shadow-2xl">
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 bg-black/50 text-white p-2 px-4 text-lg font-bold">
                    {image.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-lg leading-relaxed text-brand-silver">
              A&D Brothers is a leading service provider in the field of Industrial and Marine Coating, with over 5 years of experience in the industrial field and 1 year in the marine field. We are pioneers in various surface preparation and coating jobs, supported by a team of highly skilled, experienced, and qualified supervisors and artisans. We are experts in the blasting and painting of ships, tanks, hulls, pipelines, and industrial storage tanks, both internally and externally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
