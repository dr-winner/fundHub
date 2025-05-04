
import React from 'react';
import Layout from '@/components/layout/Layout';
import CampaignForm from '@/components/create/CampaignForm';

const CreateCampaign = () => {
  return (
    <Layout>
      <div className="py-12 bg-fundhub-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Start Your Fundraising Campaign</h1>
            <p className="text-xl text-gray-600">
              Create a transparent blockchain-based campaign to fund your project
              and make a lasting impact.
            </p>
          </div>
          
          <CampaignForm />
        </div>
      </div>
    </Layout>
  );
};

export default CreateCampaign;
