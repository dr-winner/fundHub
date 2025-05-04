
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import CampaignCard from '@/components/campaigns/CampaignCard';
import CampaignFilters from '@/components/campaigns/CampaignFilters';
import { Button } from '@/components/ui/button';

// Sample data for campaigns
const sampleCampaigns = [
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
    featured: true,
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
  {
    id: 5,
    title: 'Technology Innovation Hub',
    creator: 'Future Tech Alliance',
    image: 'https://images.unsplash.com/photo-1581092335397-9fa341362fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    raised: 45,
    goal: 100,
    currency: 'ETH',
    daysLeft: 30,
    category: 'Technology',
    percentComplete: 45,
  },
  {
    id: 6,
    title: 'Humanitarian Aid for Refugees',
    creator: 'Global Help Initiative',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    raised: 28.5,
    goal: 50,
    currency: 'ETH',
    daysLeft: 15,
    category: 'Humanitarian',
    percentComplete: 57,
  },
];

const Campaigns = () => {
  const [filteredCampaigns, setFilteredCampaigns] = useState(sampleCampaigns);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const campaignsPerPage = 6;

  // Filter campaigns based on user selections
  const handleFilterChange = (filters: any) => {
    console.log('Applying filters:', filters);
    
    // Simulate API call delay
    setIsLoading(true);
    setTimeout(() => {
      // Apply filtering logic (simplified for demo)
      let filtered = [...sampleCampaigns];
      
      // Filter by search query
      if (filters.searchQuery) {
        filtered = filtered.filter(
          campaign => campaign.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                     campaign.creator.toLowerCase().includes(filters.searchQuery.toLowerCase())
        );
      }
      
      // Filter by category
      if (filters.category && filters.category !== 'all') {
        filtered = filtered.filter(campaign => campaign.category === filters.category);
      }
      
      // Filter by funding range
      filtered = filtered.filter(
        campaign => campaign.percentComplete >= filters.fundingRange[0] && 
                   campaign.percentComplete <= filters.fundingRange[1]
      );
      
      // Sort campaigns
      if (filters.sortBy === 'newest') {
        // For demo, we'll just leave the order as is
      } else if (filters.sortBy === 'endingSoon') {
        filtered.sort((a, b) => a.daysLeft - b.daysLeft);
      } else if (filters.sortBy === 'mostFunded') {
        filtered.sort((a, b) => b.percentComplete - a.percentComplete);
      }
      
      setFilteredCampaigns(filtered);
      setCurrentPage(1);
      setIsLoading(false);
    }, 500);
  };

  // Get current campaigns
  const indexOfLastCampaign = currentPage * campaignsPerPage;
  const indexOfFirstCampaign = indexOfLastCampaign - campaignsPerPage;
  const currentCampaigns = filteredCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="bg-fundhub-light py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Explore Campaigns</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover meaningful projects and contribute to causes that align with your values.
            </p>
          </div>
          
          <CampaignFilters onFilterChange={handleFilterChange} />
          
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-fundhub-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Loading campaigns...</p>
            </div>
          ) : (
            <>
              {filteredCampaigns.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">No campaigns found matching your filters.</p>
                  <Button 
                    onClick={() => handleFilterChange({})}
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentCampaigns.map((campaign) => (
                      <CampaignCard key={campaign.id} {...campaign} />
                    ))}
                  </div>
                  
                  {/* Pagination */}
                  {filteredCampaigns.length > campaignsPerPage && (
                    <div className="flex justify-center mt-12">
                      {Array.from({ length: Math.ceil(filteredCampaigns.length / campaignsPerPage) }).map((_, index) => (
                        <Button
                          key={index}
                          onClick={() => paginate(index + 1)}
                          variant={currentPage === index + 1 ? 'default' : 'outline'}
                          className={`mx-1 ${currentPage === index + 1 ? 'bg-fundhub-primary' : ''}`}
                        >
                          {index + 1}
                        </Button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Campaigns;
