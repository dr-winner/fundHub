
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Clock, 
  Users, 
  ThumbsUp, 
  Award, 
  Share2, 
  Heart, 
  MessageSquare,
  FileText,
  Calendar,
  CheckCircle,
  Wallet,
  AlertCircle
} from 'lucide-react';

// Sample campaign data
const campaignData = {
  id: 1,
  title: 'Clean Water for Rural Communities',
  creator: 'Water Foundation',
  creatorAddress: '0x1234...7890',
  image: 'https://images.unsplash.com/photo-1581321825824-1c7b379b62fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  raised: 18.75,
  goal: 25,
  currency: 'ETH',
  daysLeft: 12,
  category: 'Environmental',
  percentComplete: 75,
  featured: true,
  backers: 127,
  description: `This campaign aims to provide clean water access to rural communities that currently lack proper infrastructure. 
  
  Access to clean water is a fundamental human right, yet millions around the world still struggle to obtain this basic necessity. Our initiative focuses on building sustainable water systems in regions most affected by water scarcity and contamination.
  
  With your support, we can:
  - Install water purification systems in 25 villages
  - Train local communities in system maintenance
  - Conduct water quality testing and monitoring
  - Implement rainwater harvesting technologies
  
  Each donation directly contributes to improving lives and creating healthier communities.`,
  updates: [
    {
      id: 1,
      date: '2025-04-20',
      title: 'First Milestone Reached!',
      content: 'We are thrilled to announce that we have completed our first milestone! The initial surveys have been conducted in 10 villages, and equipment procurement has begun.',
    },
    {
      id: 2,
      date: '2025-04-01',
      title: 'Campaign Launch',
      content: 'Today marks the official launch of our Clean Water Initiative. Thank you to everyone who has supported us so far!',
    },
  ],
  milestones: [
    {
      id: 1,
      title: 'Initial Survey & Planning',
      percentage: 25,
      completed: true,
      date: '2025-04-05',
      description: 'Conduct surveys in target communities and develop implementation plan.',
    },
    {
      id: 2,
      title: 'Equipment Procurement',
      percentage: 50,
      completed: false,
      date: '2025-05-15',
      description: 'Purchase necessary filtration systems, pipes, and construction materials.',
    },
    {
      id: 3,
      title: 'Installation & Construction',
      percentage: 75,
      completed: false,
      date: '2025-06-20',
      description: 'Install water systems and necessary infrastructure in communities.',
    },
    {
      id: 4,
      title: 'Community Training & Handover',
      percentage: 100,
      completed: false,
      date: '2025-07-15',
      description: 'Train local teams on maintenance and officially transfer ownership to communities.',
    }
  ],
  comments: [
    {
      id: 1,
      user: 'Alex Johnson',
      date: '2025-04-15',
      content: 'This is such an important cause. Happy to support!',
      walletAddress: '0xabcd...1234',
    },
    {
      id: 2,
      user: 'Sarah Williams',
      date: '2025-04-10',
      content: 'I visited one of these communities last year. The need for clean water is urgent.',
      walletAddress: '0x7890...4321',
    },
  ],
};

const CampaignDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [campaign, setCampaign] = useState(campaignData);
  const [donationAmount, setDonationAmount] = useState('');
  const [commentText, setCommentText] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading campaign data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const handleDonate = () => {
    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid donation amount",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Processing donation...",
      description: "Please confirm the transaction in your wallet",
    });
    
    // Simulate blockchain transaction
    setTimeout(() => {
      toast({
        title: "Donation successful!",
        description: `Thank you for your donation of ${donationAmount} ${campaign.currency}`,
      });
      
      // Update campaign data with new donation
      setCampaign(prev => ({
        ...prev,
        raised: prev.raised + parseFloat(donationAmount),
        backers: prev.backers + 1,
        percentComplete: Math.min(100, Math.round((prev.raised + parseFloat(donationAmount)) / prev.goal * 100))
      }));
      
      setDonationAmount('');
    }, 2000);
  };
  
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!commentText.trim()) {
      return;
    }
    
    setIsSubmittingComment(true);
    
    // Simulate comment submission
    setTimeout(() => {
      const newComment = {
        id: Date.now(),
        user: 'You',
        date: new Date().toISOString().split('T')[0],
        content: commentText,
        walletAddress: '0x4321...7890',
      };
      
      setCampaign(prev => ({
        ...prev,
        comments: [newComment, ...prev.comments]
      }));
      
      setCommentText('');
      setIsSubmittingComment(false);
      
      toast({
        title: "Comment posted",
        description: "Your comment has been added to the campaign",
      });
    }, 1000);
  };
  
  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[70vh]">
          <div className="inline-block w-12 h-12 border-4 border-fundhub-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="bg-fundhub-light py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Campaign Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <Link 
                    to="/campaigns" 
                    className="text-fundhub-primary hover:underline"
                  >
                    Campaigns
                  </Link>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-600">{campaign.category}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{campaign.title}</h1>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-fundhub-primary/20 flex items-center justify-center mr-3">
                    {campaign.creator.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{campaign.creator}</p>
                    <p className="text-sm text-gray-500">{campaign.creatorAddress}</p>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden mb-8">
                <img 
                  src={campaign.image} 
                  alt={campaign.title} 
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Campaign Tabs */}
              <Tabs defaultValue="about" className="mb-8">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="updates">Updates ({campaign.updates.length})</TabsTrigger>
                  <TabsTrigger value="milestones">Milestones</TabsTrigger>
                  <TabsTrigger value="comments">Comments ({campaign.comments.length})</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" /> 
                        Campaign Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="whitespace-pre-line">
                      {campaign.description}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="updates" className="space-y-6">
                  {campaign.updates.length > 0 ? (
                    campaign.updates.map((update) => (
                      <Card key={update.id}>
                        <CardHeader>
                          <CardTitle>{update.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {update.date}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {update.content}
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No updates have been posted yet.</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="milestones" className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-gray-200">
                    {campaign.milestones.map((milestone, index) => (
                      <div 
                        key={milestone.id} 
                        className={`mb-8 relative ${
                          index === campaign.milestones.length - 1 ? '' : ''
                        }`}
                      >
                        {/* Milestone indicator */}
                        <div 
                          className={`absolute -left-[25px] w-12 h-12 rounded-full flex items-center justify-center ${
                            milestone.completed 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          {milestone.completed ? (
                            <CheckCircle className="h-6 w-6" />
                          ) : (
                            <span className="font-medium">{milestone.percentage}%</span>
                          )}
                        </div>
                        
                        <Card className={milestone.completed ? 'border-green-200' : ''}>
                          <CardHeader>
                            <CardTitle>{milestone.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              Target: {milestone.date}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            {milestone.description}
                          </CardContent>
                          <CardFooter className="text-sm text-gray-500">
                            {milestone.completed 
                              ? 'Milestone completed and funds released' 
                              : `Funds will be released when milestone is reached (${milestone.percentage}% of total)`
                            }
                          </CardFooter>
                        </Card>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="comments" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Join the conversation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCommentSubmit} className="space-y-4">
                        <div>
                          <textarea 
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-fundhub-primary"
                            rows={4}
                            placeholder="Share your thoughts about this campaign..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="flex justify-end">
                          <Button 
                            type="submit" 
                            disabled={!commentText.trim() || isSubmittingComment}
                          >
                            {isSubmittingComment ? 'Posting...' : 'Post Comment'}
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                  
                  {campaign.comments.length > 0 ? (
                    campaign.comments.map((comment) => (
                      <Card key={comment.id}>
                        <CardHeader>
                          <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-fundhub-primary/20 flex items-center justify-center">
                                {comment.user.charAt(0)}
                              </div>
                              <CardTitle className="text-base">{comment.user}</CardTitle>
                            </div>
                            <CardDescription>{comment.date}</CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent>{comment.content}</CardContent>
                        <CardFooter className="text-xs text-gray-400">
                          Verified donor • {comment.walletAddress}
                        </CardFooter>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">Be the first to comment on this campaign!</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Funding Progress Card */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Campaign Progress</CardTitle>
                  <CardDescription>
                    {campaign.daysLeft} days left
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-2xl">
                        {campaign.raised} {campaign.currency}
                      </span>
                      <span className="text-gray-500">
                        of {campaign.goal} {campaign.currency}
                      </span>
                    </div>
                    
                    <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-fundhub-primary rounded-full" 
                        style={{ width: `${campaign.percentComplete}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-fundhub-light rounded-lg">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-fundhub-primary" />
                        <span className="font-bold">{campaign.backers}</span>
                      </div>
                      <p className="text-sm text-gray-500">Backers</p>
                    </div>
                    <div className="p-3 bg-fundhub-light rounded-lg">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-fundhub-primary" />
                        <span className="font-bold">{campaign.daysLeft}</span>
                      </div>
                      <p className="text-sm text-gray-500">Days Left</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="amount" className="block mb-2 text-sm font-medium">
                        Donation Amount ({campaign.currency})
                      </label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        className="mb-2"
                      />
                      <div className="flex gap-2">
                        {[0.1, 0.5, 1, 5].map((amount) => (
                          <Button
                            key={amount}
                            variant="outline"
                            className="flex-1"
                            onClick={() => setDonationAmount(amount.toString())}
                          >
                            {amount}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleDonate}
                      className="w-full py-6 text-lg btn-gradient"
                      disabled={!donationAmount || parseFloat(donationAmount) <= 0}
                    >
                      <Wallet className="mr-2 h-5 w-5" />
                      Donate Now
                    </Button>
                    
                    <div className="flex justify-center gap-3">
                      <Button variant="ghost" size="sm">
                        <Heart className="mr-1 h-4 w-4" /> Favorite
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="mr-1 h-4 w-4" /> Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Rewards Card */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" /> 
                    Donor Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4 hover:border-fundhub-primary transition-colors">
                    <h3 className="font-semibold mb-1">Supporter NFT</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Donate 0.1 ETH or more to receive a unique Supporter NFT badge.
                    </p>
                    <div className="bg-fundhub-light rounded-lg p-3 text-center">
                      <img 
                        src="https://via.placeholder.com/100" 
                        alt="Supporter NFT" 
                        className="rounded-lg mx-auto mb-2"
                      />
                      <p className="text-xs text-gray-500">Preview</p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:border-fundhub-primary transition-colors">
                    <h3 className="font-semibold mb-1">Impact Maker NFT</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Donate 1 ETH or more to receive a rare Impact Maker NFT with special benefits.
                    </p>
                    <div className="bg-fundhub-light rounded-lg p-3 text-center">
                      <img 
                        src="https://via.placeholder.com/100" 
                        alt="Impact NFT" 
                        className="rounded-lg mx-auto mb-2"
                      />
                      <p className="text-xs text-gray-500">Preview</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Blockchain Verification */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <AlertCircle className="h-5 w-5 text-green-600" /> 
                    Blockchain Verified
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Contract Address</span>
                      <a href="#" className="text-fundhub-primary truncate max-w-[180px]">0x7a23B5...4a2C</a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Network</span>
                      <span>Ethereum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Transactions</span>
                      <a href="#" className="text-fundhub-primary">View on Explorer</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CampaignDetail;
