
import React from 'react';

const CryptoTokens = () => {
  const tokens = [
    {
      name: 'Ethereum',
      symbol: 'ETH',
      icon: 'Ξ',
      gradient: 'from-[#627eea] to-[#3c3c3d]',
      description: 'The leading smart contract platform for decentralized applications'
    },
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      icon: '₿',
      gradient: 'from-[#f7931a] to-[#ff9900]',
      description: 'The original cryptocurrency and digital store of value'
    },
    {
      name: 'USDC',
      symbol: 'USDC',
      icon: '$',
      gradient: 'from-[#2775ca] to-[#2775ca]',
      description: 'A fully-collateralized US dollar stablecoin'
    },
    {
      name: 'FundToken',
      symbol: 'FUND',
      icon: 'F',
      gradient: 'from-fundhub-primary to-fundhub-secondary',
      description: 'Our native token for governance and rewards'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Multi-Currency Support</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            FundHub accepts a wide range of cryptocurrencies for donations, making it easy to contribute regardless of your preferred digital currency.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tokens.map((token) => (
            <div key={token.symbol} className="relative group overflow-hidden">
              <div className="card-hover bg-white rounded-xl border border-gray-100 p-6 transition-all">
                <div className="flex justify-between items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${token.gradient} flex items-center justify-center`}>
                    <span className="text-white text-xl font-bold">{token.icon}</span>
                  </div>
                  <div className="token-float opacity-75">
                    {Array(3).fill(0).map((_, i) => (
                      <div 
                        key={i} 
                        className={`absolute w-3 h-3 rounded-full bg-gradient-to-r ${token.gradient}`}
                        style={{ 
                          top: `${20 + i * 25}%`, 
                          right: `${10 + i * 3}%`,
                          opacity: 0.7 - i * 0.2
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <h3 className="font-bold text-lg">{token.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="font-mono font-bold mr-1">{token.symbol}</span>
                </div>
                <p className="text-sm text-gray-600">{token.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            More currencies are being added regularly to increase accessibility
          </p>
        </div>
      </div>
    </section>
  );
};

export default CryptoTokens;
