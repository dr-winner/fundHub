
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wallet, Heart, Gift } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-fundhub-light via-white to-fundhub-light animated-bg py-20 overflow-hidden">
      {/* Animated blockchain elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blockchain-particle top-1/4 left-1/4"></div>
        <div className="blockchain-particle top-3/4 left-2/3"></div>
        <div className="blockchain-particle top-1/2 left-1/3"></div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-fundhub-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-fundhub-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center mb-4 space-x-2">
              <span className="px-3 py-1 bg-fundhub-primary/10 text-fundhub-primary text-sm font-medium rounded-full">Blockchain Powered</span>
              <span className="px-3 py-1 bg-fundhub-secondary/10 text-fundhub-secondary text-sm font-medium rounded-full">Transparent Donations</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fundhub-dark to-fundhub-primary">
              Fund Causes That <br/>Touch Hearts
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              FundHub combines blockchain technology with emotional impact — 
              creating a transparent ecosystem where every contribution makes a 
              real difference and changes lives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-gradient px-8 py-6 text-lg group">
                <Link to="/campaigns">
                  Discover Campaigns
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-fundhub-primary text-fundhub-primary hover:bg-fundhub-primary hover:text-white px-8 py-6 text-lg">
                <Link to="/create">
                  <Heart className="mr-2 h-5 w-5" />
                  Start Fundraising
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-fundhub-primary to-fundhub-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-fundhub-primary">$2.5M+</p>
                <p className="text-gray-600">Funds Raised</p>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-fundhub-primary to-fundhub-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-fundhub-primary">150+</p>
                <p className="text-gray-600">Active Campaigns</p>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-fundhub-primary to-fundhub-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-fundhub-primary">10K+</p>
                <p className="text-gray-600">Global Donors</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-fundhub-primary to-fundhub-secondary rounded-3xl blur-lg opacity-20 animate-pulse-glow"></div>
              <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/20 backdrop-blur-md rounded-full text-xs font-medium text-green-700 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                  Live Campaign
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1607463747521-8bd0be2a7a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="FundHub Impact" 
                  className="rounded-2xl w-full h-80 object-cover object-center"
                />
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">Clean Water Initiative</h3>
                      <p className="text-sm text-gray-600">by Water for All Foundation</p>
                    </div>
                    <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Active
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-fundhub-primary to-fundhub-secondary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Raised</p>
                      <div className="font-medium flex items-center">
                        <div className="w-5 h-5 mr-1 rounded-full bg-gradient-to-r from-[#627eea] to-[#3c3c3d] flex items-center justify-center">
                          <span className="text-white text-xs font-bold">Ξ</span>
                        </div>
                        15.5 ETH
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Target</p>
                      <div className="font-medium flex items-center">
                        <div className="w-5 h-5 mr-1 rounded-full bg-gradient-to-r from-[#627eea] to-[#3c3c3d] flex items-center justify-center">
                          <span className="text-white text-xs font-bold">Ξ</span>
                        </div>
                        20 ETH
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Remaining</p>
                      <p className="font-medium">3 days</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-fundhub-primary to-fundhub-secondary text-white">
                    <Heart className="mr-2 h-4 w-4" /> Donate Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
