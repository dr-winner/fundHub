
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Wallet, Shield, Award } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (provider: string) => void;
}

const walletProviders = [
  {
    id: 'metamask',
    name: 'MetaMask',
    icon: '🦊',
    description: 'Connect to your MetaMask wallet',
    color: '#F6851B'
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: '🔗',
    description: 'Scan with WalletConnect to connect',
    color: '#3B99FC'
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    icon: '🪙',
    description: 'Connect to your Coinbase wallet',
    color: '#0052FF'
  },
];

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({ isOpen, onClose, onConnect }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const { toast } = useToast();
  
  const handleConnect = async (providerId: string) => {
    setSelectedProvider(providerId);
    setIsConnecting(true);
    
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false);
      onConnect(providerId);
      toast({
        title: "Wallet Connected",
        description: `Successfully connected with ${walletProviders.find(p => p.id === providerId)?.name}`,
        variant: "default",
      });
      onClose();
    }, 1500);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={isOpen => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Wallet className="h-5 w-5 text-fundhub-primary" /> 
            Connect Your Wallet
          </DialogTitle>
          <DialogDescription>
            Choose your preferred wallet to connect and start making a difference
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          {walletProviders.map((provider) => (
            <Button
              key={provider.id}
              variant="outline"
              className={`flex justify-between items-center h-16 px-4 hover:bg-muted/50 ${
                isConnecting && selectedProvider === provider.id ? 'bg-muted/50' : ''
              }`}
              disabled={isConnecting}
              onClick={() => handleConnect(provider.id)}
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">{provider.icon}</span>
                <div className="text-left">
                  <div className="font-medium">{provider.name}</div>
                  <div className="text-xs text-muted-foreground">{provider.description}</div>
                </div>
              </div>
              {isConnecting && selectedProvider === provider.id ? (
                <div className="w-5 h-5 border-2 border-t-transparent border-fundhub-primary rounded-full animate-spin"></div>
              ) : (
                <div className="w-5 h-5 rounded-full" style={{ background: provider.color }}></div>
              )}
            </Button>
          ))}
        </div>
        
        <div className="bg-muted/50 p-3 rounded-lg space-y-2">
          <div className="flex items-start gap-2">
            <Shield className="h-5 w-5 text-fundhub-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Your wallet is only used to securely verify your identity. FundHub never has access to your funds without explicit approval.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Award className="h-5 w-5 text-fundhub-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Connecting your wallet enables you to receive NFTs for your donations and track your impact.
            </p>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col gap-2 sm:gap-0">
          <Button
            variant="ghost"
            onClick={onClose}
            disabled={isConnecting}
            className="w-full sm:w-auto"
          >
            Connect Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectWalletModal;
