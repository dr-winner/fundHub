
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-fundhub-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Future of Charitable Giving?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you want to fundraise for a cause or contribute to impactful projects,
            FundHub provides the tools and transparency you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-fundhub-primary hover:bg-fundhub-primary/90 text-white px-8 py-6 text-lg">
              <Link to="/campaigns">Browse Campaigns</Link>
            </Button>
            <Button asChild className="bg-fundhub-secondary hover:bg-fundhub-secondary/90 text-white px-8 py-6 text-lg">
              <Link to="/create">Start Fundraising</Link>
            </Button>
          </div>
          
          <p className="mt-8 text-gray-400">
            Join 10,000+ users already making an impact through blockchain-powered donations
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
