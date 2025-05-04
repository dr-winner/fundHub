
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Wallet, ChevronDown, Heart } from 'lucide-react';
import ConnectWalletModal from '../wallet/ConnectWalletModal';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openConnectWalletModal = () => {
    if (isConnected) {
      // If already connected, show the wallet address
      toast({
        title: "Wallet Connected",
        description: `Connected address: ${walletAddress?.slice(0, 6)}...${walletAddress?.slice(-4)}`,
      });
    } else {
      setIsWalletModalOpen(true);
    }
  };

  const handleWalletConnect = (provider: string) => {
    // Simulate wallet connection with a fake address
    const mockAddress = '0x' + Array(40).fill(0).map(() => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
    
    setWalletAddress(mockAddress);
    setIsConnected(true);
    
    console.log(`Connected to wallet via ${provider}`, mockAddress);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-fundhub animate-pulse-glow flex items-center justify-center">
              <span className="font-bold text-white">FH</span>
            </div>
            <span className="text-2xl font-bold text-fundhub-dark">
              Fund<span className="text-fundhub-primary">Hub</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              <Link to="/" className="font-medium text-gray-700 hover:text-fundhub-primary transition-colors">
                Home
              </Link>
              <Link to="/campaigns" className="font-medium text-gray-700 hover:text-fundhub-primary transition-colors">
                Campaigns
              </Link>
              <Link to="/create" className="font-medium text-gray-700 hover:text-fundhub-primary transition-colors">
                Start Fundraising
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-fundhub-primary transition-colors">
                About
              </Link>
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="outline"
                className="border-fundhub-primary text-fundhub-primary hover:bg-fundhub-primary/10"
                asChild
              >
                <Link to="/campaigns">
                  <Heart className="mr-2 h-4 w-4" /> Donate
                </Link>
              </Button>
              
              <Button 
                onClick={openConnectWalletModal}
                className={`${isConnected 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                  : 'btn-gradient'}`}
                >
                <Wallet className="mr-2 h-5 w-5" />
                {isConnected ? (
                  <span className="flex items-center">
                    {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)} 
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                ) : 'Connect Wallet'}
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-gray-700 hover:text-fundhub-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/campaigns" 
                className="font-medium text-gray-700 hover:text-fundhub-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Campaigns
              </Link>
              <Link 
                to="/create" 
                className="font-medium text-gray-700 hover:text-fundhub-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Fundraising
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-gray-700 hover:text-fundhub-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Button 
                variant="outline"
                className="border-fundhub-primary text-fundhub-primary hover:bg-fundhub-primary/10 w-full justify-start"
                asChild
              >
                <Link to="/campaigns">
                  <Heart className="mr-2 h-4 w-4" /> Donate
                </Link>
              </Button>
              <Button 
                onClick={() => {
                  setIsMenuOpen(false);
                  openConnectWalletModal();
                }}
                className={`w-full justify-start ${isConnected 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                  : 'btn-gradient'}`}
                >
                <Wallet className="mr-2 h-5 w-5" />
                {isConnected ? (
                  <span>
                    {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}
                  </span>
                ) : 'Connect Wallet'}
              </Button>
            </div>
          </div>
        )}
      </nav>
      
      <ConnectWalletModal 
        isOpen={isWalletModalOpen} 
        onClose={() => setIsWalletModalOpen(false)}
        onConnect={handleWalletConnect}
      />
    </>
  );
};

export default Navbar;
