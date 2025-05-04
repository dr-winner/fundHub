
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Wallet',
    description: 'Link your digital wallet to authenticate your identity securely on the blockchain.',
  },
  {
    number: '02',
    title: 'Create or Browse Campaigns',
    description: 'Start your own fundraising initiative or discover causes that align with your values.',
  },
  {
    number: '03',
    title: 'Make Smart Donations',
    description: 'Contribute using your preferred cryptocurrency with full transparency and tracking.',
  },
  {
    number: '04',
    title: 'Track Impact & Earn Rewards',
    description: 'Monitor your donation\'s impact in real-time and receive NFT rewards for your support.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-fundhub-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How FundHub Works</h2>
          <p className="text-lg text-gray-600">
            Our platform makes donating and fundraising seamless through blockchain technology,
            ensuring maximum transparency and efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-xl bg-white shadow-md card-hover"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-fundhub flex items-center justify-center">
                <span className="text-white font-bold">{step.number}</span>
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-xl mx-auto text-center">
          <p className="text-fundhub-primary font-medium text-lg mb-4">
            Ready to make an impact?
          </p>
          <button className="btn-gradient px-8 py-3 text-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
