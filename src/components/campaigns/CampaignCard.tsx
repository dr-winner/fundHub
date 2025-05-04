
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

interface CampaignCardProps {
  id: number;
  title: string;
  creator: string;
  image: string;
  raised: number;
  goal: number;
  currency: string;
  daysLeft: number;
  category: string;
  percentComplete: number;
  featured?: boolean;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  id,
  title,
  creator,
  image,
  raised,
  goal,
  currency,
  daysLeft,
  category,
  percentComplete,
  featured = false,
}) => {
  return (
    <Link to={`/campaigns/${id}`}>
      <Card 
        className={`overflow-hidden card-hover h-full ${
          featured ? 'border-2 border-fundhub-primary' : ''
        }`}
      >
        <div className="relative h-48">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </div>
          {featured && (
            <div className="absolute top-3 left-3 bg-fundhub-primary text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-500 mb-3">by {creator}</p>
          
          <div className="bg-gray-100 rounded-full h-2 mb-3">
            <div 
              className="bg-fundhub-primary h-2 rounded-full" 
              style={{ width: `${percentComplete}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-gray-500">Raised</p>
              <p className="font-medium">{raised} {currency}</p>
            </div>
            <div>
              <p className="text-gray-500">Goal</p>
              <p className="font-medium">{goal} {currency}</p>
            </div>
            <div>
              <p className="text-gray-500">Left</p>
              <p className="font-medium">{daysLeft} days</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CampaignCard;
