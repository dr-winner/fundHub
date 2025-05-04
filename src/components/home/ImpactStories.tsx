
import React from 'react';
import { Heart, Award, HandCoins } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stories = [
  {
    id: 1,
    title: "Clean Water for Sara's Village",
    image: "https://images.unsplash.com/photo-1548567117-02328696f450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    quote: "Before this well, I walked 5 miles daily for water. Now our whole community has access to clean water right here.",
    person: "Sara M.",
    location: "Rural Kenya",
    funds: "12.5 ETH raised",
    impact: "1,200 lives changed",
    category: "Healthcare"
  },
  {
    id: 2,
    title: "Solar Power for Mountain Schools",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    quote: "Our students can now study after sunset. The solar panels have transformed education in our village.",
    person: "Miguel R.",
    location: "Peruvian Highlands",
    funds: "18.3 ETH raised",
    impact: "350 students benefited",
    category: "Education"
  },
  {
    id: 3,
    title: "Emergency Medical Supplies",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    quote: "The medical supplies arrived when we needed them most. Lives were saved because of your timely donations.",
    person: "Dr. Amira H.",
    location: "Crisis Zone",
    funds: "32.7 ETH raised",
    impact: "2,000+ patients treated",
    category: "Healthcare"
  },
];

const ImpactStories = () => {
  return (
    <section className="py-20 bg-fundhub-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-fundhub-primary/10 text-fundhub-primary text-sm font-medium px-4 py-1.5 rounded-full">Real Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Stories That Touch Hearts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how blockchain-powered donations are creating meaningful change around the world,
            bringing hope and transformation to communities in need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl overflow-hidden shadow-md impact-pulse">
              <div className="relative h-48">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded">
                    {story.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                
                <div className="bg-fundhub-light p-4 rounded-lg mb-5">
                  <p className="italic text-gray-700 relative">
                    <span className="absolute -top-2 -left-2 text-fundhub-primary text-4xl opacity-30">"</span>
                    {story.quote}
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                    <div className="ml-2">
                      <p className="font-medium text-sm">{story.person}</p>
                      <p className="text-xs text-gray-500">{story.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                    <HandCoins className="h-4 w-4 text-fundhub-primary mr-1" />
                    <span className="text-sm font-medium">{story.funds}</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 text-fundhub-primary mr-1" />
                    <span className="text-sm font-medium">{story.impact}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-fundhub-primary text-fundhub-primary hover:bg-fundhub-primary hover:text-white">
                  <Award className="mr-2 h-4 w-4" /> View Full Story
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-gradient">
            Browse All Impact Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
