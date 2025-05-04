
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import TrendingCampaigns from '@/components/home/TrendingCampaigns';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PartnersSection from '@/components/home/PartnersSection';
import CallToAction from '@/components/home/CallToAction';
import CryptoTokens from '@/components/home/CryptoTokens';
import ImpactStories from '@/components/home/ImpactStories';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <CryptoTokens />
      <HowItWorksSection />
      <TrendingCampaigns />
      <ImpactStories />
      <TestimonialsSection />
      <PartnersSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
