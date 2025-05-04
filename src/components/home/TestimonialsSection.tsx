
import React from 'react';

// Sample data for testimonials
const testimonials = [
  {
    content: "FundHub has transformed how we raise funds for our healthcare initiatives. The blockchain transparency builds immense trust with our donors, and the milestone-based releases ensure we stay accountable.",
    author: "Maria Rodriguez",
    role: "Healthcare Foundation Director",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    content: "As a donor, I appreciate being able to track exactly how my contributions are used. The NFT rewards are a nice touch too - I display them proudly in my digital wallet!",
    author: "James Chen",
    role: "Regular Donor",
    avatar: "https://i.pravatar.cc/150?img=53"
  },
  {
    content: "The multi-currency support makes it incredibly easy for our global donor base to contribute. We've seen a 300% increase in international donations since switching to FundHub.",
    author: "Sarah Johnson",
    role: "Campaign Organizer",
    avatar: "https://i.pravatar.cc/150?img=47"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-fundhub-primary/5 to-fundhub-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-lg text-gray-600">
            Discover how FundHub is changing the landscape of charitable giving and fundraising 
            through innovative blockchain technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md relative card-hover"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-fundhub flex items-center justify-center text-white font-serif text-2xl">
                "
              </div>
              
              <p className="text-gray-600 mb-6 pt-4">{testimonial.content}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
