
import React from 'react';

const partners = [
  { name: "SonicLabs", logo: "https://via.placeholder.com/150x60?text=SonicLabs" },
  { name: "MetaMask", logo: "https://via.placeholder.com/150x60?text=MetaMask" },
  { name: "ChainLink", logo: "https://via.placeholder.com/150x60?text=ChainLink" },
  { name: "IPFS", logo: "https://via.placeholder.com/150x60?text=IPFS" },
  { name: "Ethereum", logo: "https://via.placeholder.com/150x60?text=Ethereum" },
  { name: "ICP", logo: "https://via.placeholder.com/150x60?text=ICP" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl font-medium text-gray-700 mb-10">Trusted By Industry Leaders</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
