
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 font-montserrat text-brand-gold">Contact Us</h2>
        <div className="flex flex-col lg:flex-row gap-12 bg-brand-dark p-8 md:p-12 rounded-lg shadow-2xl border border-brand-gold/10">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-6 font-montserrat">Get In Touch</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-brand-gold text-lg">Partners</h4>
                <p className="text-brand-silver">Ajay Hadap, Deepak Hadap</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-gold text-lg">Phone</h4>
                <a href="tel:8149145285" className="block text-brand-silver hover:text-brand-gold transition-colors">8149145285</a>
                <a href="tel:9765135325" className="block text-brand-silver hover:text-brand-gold transition-colors">9765135325</a>
                <a href="tel:9923214165" className="block text-brand-silver hover:text-brand-gold transition-colors">9923214165</a>
              </div>
               <div>
                <h4 className="font-bold text-brand-gold text-lg">WhatsApp</h4>
                 <a href="https://wa.me/918149145285" target="_blank" rel="noopener noreferrer" className="block text-brand-silver hover:text-brand-gold transition-colors">Message on WhatsApp</a>
              </div>
              <div>
                <h4 className="font-bold text-brand-gold text-lg">Address</h4>
                <p className="text-brand-silver">OFF: 109, near shivdham, at. Nawandhe, tal. Khalapur, dist. Raigad, Khopoli, pin-410203</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-silver mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 bg-brand-gray border border-brand-gold/30 rounded-md focus:ring-brand-gold focus:border-brand-gold text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-silver mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 bg-brand-gray border border-brand-gold/30 rounded-md focus:ring-brand-gold focus:border-brand-gold text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-silver mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-3 bg-brand-gray border border-brand-gold/30 rounded-md focus:ring-brand-gold focus:border-brand-gold text-white"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full py-3 px-6 bg-brand-gold text-black font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
