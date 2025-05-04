
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Gift, Trophy, Shield } from 'lucide-react';

interface NFTRewardProps {
  level: string;
  title: string;
  description: string;
  image: string;
  minDonation: string;
  benefits: string[];
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  icon: React.ReactNode;
}

const RarityColors = {
  common: "bg-gray-100 text-gray-800",
  uncommon: "bg-green-100 text-green-800",
  rare: "bg-blue-100 text-blue-800",
  legendary: "bg-fundhub-primary/20 text-fundhub-primary"
};

const NFTRewardCard: React.FC<NFTRewardProps> = ({ 
  level, 
  title, 
  description, 
  image, 
  minDonation, 
  benefits,
  rarity,
  icon
}) => {
  return (
    <div className="group card-hover">
      <Card className="overflow-hidden border-2 hover:border-fundhub-primary/50 transition-colors">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 z-10"></div>
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute top-3 right-3 z-20">
            <Badge className={`${RarityColors[rarity]}`}>{rarity}</Badge>
          </div>
          <div className="absolute bottom-3 left-3 text-white z-20">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm opacity-90">{level}</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
            {icon}
          </div>
        </div>
        <CardContent className="p-5">
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-3">{description}</p>
            <div className="bg-fundhub-primary/10 p-2 rounded text-sm font-medium text-fundhub-primary">
              Min. Donation: {minDonation}
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-semibold">Benefits:</p>
            <ul className="space-y-1">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="text-xs text-gray-600 flex items-start">
                  <span className="h-4 w-4 mr-2 bg-fundhub-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="h-2 w-2 bg-fundhub-primary rounded-full"></span>
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const NFTRewards = () => {
  const rewards: NFTRewardProps[] = [
    {
      level: 'Level 1',
      title: 'Community Supporter',
      description: 'The entry-level reward for helping causes',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      minDonation: '0.1 ETH',
      benefits: [
        'Digital NFT Certificate',
        'Name in supporters list',
        'Access to exclusive updates'
      ],
      rarity: 'common',
      icon: <Gift className="h-8 w-8 text-white" />
    },
    {
      level: 'Level 2',
      title: 'Impact Maker',
      description: 'For dedicated supporters making a difference',
      image: 'https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      minDonation: '0.5 ETH',
      benefits: [
        'Animated NFT with special traits',
        'Recognition in campaign materials',
        'Bi-monthly impact reports',
        'Early access to new campaigns'
      ],
      rarity: 'uncommon',
      icon: <Award className="h-8 w-8 text-white" />
    },
    {
      level: 'Level 3',
      title: 'Change Champion',
      description: 'For significant contributors driving real change',
      image: 'https://images.unsplash.com/photo-1634704784915-aacf363b021f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      minDonation: '2 ETH',
      benefits: [
        'Rare NFT with unique properties',
        'Voting rights on campaign decisions',
        'Personal thank you from beneficiaries',
        'Invitation to virtual field visits',
        'Annual impact summary video'
      ],
      rarity: 'rare',
      icon: <Trophy className="h-8 w-8 text-white" />
    },
    {
      level: 'Level 4',
      title: 'Visionary Benefactor',
      description: 'For transformational donors shaping the future',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      minDonation: '10 ETH',
      benefits: [
        'Legendary 1-of-1 NFT artwork',
        'Governance token allocation',
        'Campaign advisory board position',
        'Physical memento from project location',
        'VIP access to all platform events',
        'Featured in annual impact report'
      ],
      rarity: 'legendary',
      icon: <Shield className="h-8 w-8 text-white" />
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">NFT Rewards</h2>
        <p className="text-gray-600 mb-8">
          Earn exclusive NFTs when you donate to campaigns. These digital collectibles not only serve as proof of your contribution but unlock special benefits and recognition.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((reward, index) => (
            <NFTRewardCard key={index} {...reward} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTRewards;
