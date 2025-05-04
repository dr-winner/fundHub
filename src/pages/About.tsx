
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-fundhub-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
              <p className="text-xl text-gray-700 mb-6">
                FundHub is revolutionizing charitable giving through blockchain technology.
                We're creating a transparent, efficient, and engaging ecosystem for donors
                and fundraisers alike.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our decentralized approach eliminates traditional barriers, reduces fees,
                and ensures that funds reach their intended destination through 
                self-executing smart contracts and milestone-based releases.
              </p>
              <Button asChild className="btn-gradient">
                <Link to="/campaigns">Explore Campaigns</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="FundHub Mission"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-600">
              We envision a world where charitable giving is transparent, 
              efficient, and accessible to everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-fundhub-light rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-fundhub-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">
                Building unparalleled trust through blockchain verification, 
                immutable records, and complete funding transparency.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-fundhub-light rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-fundhub-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Empowerment</h3>
              <p className="text-gray-600">
                Giving donors direct influence through governance tokens and
                enabling communities to collectively direct resources.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-fundhub-light rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-fundhub-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation & Accessibility</h3>
              <p className="text-gray-600">
                Leveraging cutting-edge technology to make charitable giving
                accessible, efficient, and rewarding for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-fundhub-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-gray-600">
              Meet the passionate individuals behind FundHub who are dedicated to 
              revolutionizing charitable giving through blockchain technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Founder & CEO',
                image: 'https://i.pravatar.cc/300?img=47',
                bio: 'Former fintech executive with 10+ years experience in blockchain and financial inclusion projects.'
              },
              {
                name: 'Marcus Johnson',
                role: 'CTO',
                image: 'https://i.pravatar.cc/300?img=68',
                bio: 'Blockchain developer and architect with experience at Ethereum Foundation and multiple DeFi projects.'
              },
              {
                name: 'Aisha Patel',
                role: 'Head of Partnerships',
                image: 'https://i.pravatar.cc/300?img=45',
                bio: 'NGO veteran with extensive experience in international development and cross-sector collaborations.'
              },
              {
                name: 'David Kim',
                role: 'Lead Product Designer',
                image: 'https://i.pravatar.cc/300?img=61',
                bio: 'UX specialist focused on creating accessible and engaging experiences in Web3 applications.'
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-fundhub-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                alt="Blockchain Technology"
                className="rounded-xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology</h2>
              <p className="text-lg text-gray-700 mb-6">
                FundHub leverages cutting-edge blockchain technology to create a 
                secure, transparent, and efficient donation ecosystem.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-fundhub-light flex-shrink-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-fundhub-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0v10l-8 4m-8-4V7m0 10l8-4m8 4l-8-4m-8 4l8-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Smart Contracts</h3>
                    <p className="text-gray-600">
                      Self-executing contracts with milestone-based fund releases
                      ensure funds are used for their intended purpose.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-fundhub-light flex-shrink-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-fundhub-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Cross-Chain Compatibility</h3>
                    <p className="text-gray-600">
                      Support for multiple blockchains including Ethereum, ICP, and 
                      others to maximize accessibility and options.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-fundhub-light flex-shrink-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-fundhub-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">AI-Powered Features</h3>
                    <p className="text-gray-600">
                      Advanced algorithms for fraud detection, donor matching, and
                      optimized fund allocation for maximum impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-fundhub-light flex-shrink-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-fundhub-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">NFT Rewards System</h3>
                    <p className="text-gray-600">
                      Unique digital collectibles as recognition for donors,
                      creating additional engagement and value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-fundhub-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the FundHub Community</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Whether you're looking to donate to meaningful causes or raise funds
            for your own initiative, FundHub provides the platform you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-fundhub-primary hover:bg-fundhub-primary/90 px-8 py-6 text-lg">
              <Link to="/campaigns">Explore Campaigns</Link>
            </Button>
            <Button asChild className="bg-fundhub-secondary hover:bg-fundhub-secondary/90 px-8 py-6 text-lg">
              <Link to="/create">Start a Campaign</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
