
import React from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Sample data for trending campaigns
const trendingCampaigns = [
  {
    id: 1,
    title: 'Clean Water for Rural Communities',
    creator: 'Water Foundation',
    image: 'https://images.unsplash.com/photo-1581321825824-1c7b379b62fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    raised: 18.75,
    goal: 25,
    currency: 'ETH',
    daysLeft: 12,
    category: 'Environmental',
    percentComplete: 75,
  },
  {
    id: 2,
    title: 'Education Technology for Underserved Schools',
    creator: 'EduTech Initiative',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    raised: 12.4,
    goal: 20,
    currency: 'ETH',
    daysLeft: 8,
    category: 'Education',
    percentComplete: 62,
  },
  {
    id: 3,
    title: 'Emergency Medical Aid for Crisis Areas',
    creator: 'Doctors Without Borders',
    image: 'https://images.unsplash.com/photo-1577368287217-16ff9373a733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    raised: 35.2,
    goal: 40,
    currency: 'ETH',
    daysLeft: 5,
    category: 'Healthcare',
    percentComplete: 88,
  },
  {
    id: 4,
    title: 'Sustainable Agriculture Project',
    creator: 'Green Earth Collective',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    raised: 8.3,
    goal: 15,
    currency: 'ETH',
    daysLeft: 20,
    category: 'Environmental',
    percentComplete: 55,
  },
];

const TrendingCampaigns = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Trending Campaigns</h2>
            <p className="text-gray-600 mt-2">Discover the most impactful projects on FundHub</p>
          </div>
          <Link 
            to="/campaigns"
            className="text-fundhub-primary font-medium hover:underline hidden md:block"
          >
            View All Campaigns →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingCampaigns.map((campaign) => (
            <Link to={`/campaigns/${campaign.id}`} key={campaign.id}>
              <Card className="overflow-hidden card-hover h-full">
                <div className="relative h-48">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium">
                    {campaign.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg line-clamp-1">{campaign.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">by {campaign.creator}</p>
                  
                  <div className="bg-gray-100 rounded-full h-2 mb-3">
                    <div 
                      className="bg-fundhub-primary h-2 rounded-full" 
                      style={{ width: `${campaign.percentComplete}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-gray-500">Raised</p>
                      <p className="font-medium">{campaign.raised} {campaign.currency}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Goal</p>
                      <p className="font-medium">{campaign.goal} {campaign.currency}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Left</p>
                      <p className="font-medium">{campaign.daysLeft} days</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/campaigns"
            className="text-fundhub-primary font-medium hover:underline"
          >
            View All Campaigns →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingCampaigns;
