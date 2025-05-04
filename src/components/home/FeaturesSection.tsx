
import React from 'react';
import { 
  ShieldCheck, 
  Lightbulb, 
  Wallet, 
  Zap, 
  UserCircle, 
  Award, 
  Gem, 
  Trophy 
} from 'lucide-react';

const features = [
  {
    title: 'Decentralized Crowdfunding',
    description: 'Launch campaigns with custom parameters including goals, deadlines, and milestone-based releasing.',
    icon: <Wallet className="w-12 h-12 text-fundhub-primary" />,
  },
  {
    title: 'AI-Powered Recommendations',
    description: 'Smart algorithms match donors with relevant causes and detect potential fraudulent activity.',
    icon: <Lightbulb className="w-12 h-12 text-fundhub-primary" />,
  },
  {
    title: 'Smart Contract Distribution',
    description: 'Automated fund distribution using self-executing smart contracts upon milestone completion.',
    icon: <Zap className="w-12 h-12 text-fundhub-primary" />,
  },
  {
    title: 'Multi-Currency Support',
    description: 'Accept donations in various cryptocurrencies and fiat with seamless cross-chain swaps.',
    icon: <Gem className="w-12 h-12 text-fundhub-primary" />,
  },
  {
    title: 'Decentralized Identity',
    description: 'Blockchain-based verification system prevents fraudulent fundraisers and builds trust.',
    icon: <UserCircle className="w-12 h-12 text-fundhub-primary" />,
  },
  {
    title: 'NFT Rewards & Recognition',
    description: 'Exclusive NFTs for donors and campaign supporters, unlocking special perks.',
    icon: <Award className="w-12 h-12 text-fundhub-primary" />,
  },
  {
    title: 'Fund Escrow & Governance',
    description: 'Tokenized escrow systems with governance rights for major donors and stakeholders.',
    icon: <ShieldCheck className="w-12 h-12 text-fundhub-primary" />,
  },
  {
    title: 'Gamified Engagement',
    description: 'Leaderboards, donor perks, and social sharing incentives to boost community participation.',
    icon: <Trophy className="w-12 h-12 text-fundhub-primary" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Revolutionizing Charitable Giving</h2>
          <p className="text-lg text-gray-600">
            Our platform combines cutting-edge blockchain technology with innovative features 
            to create a transparent, efficient, and engaging donation ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="blockchain-item card-hover p-6 rounded-xl border border-gray-100 bg-white"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
