
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from '@/components/ui/slider';
import { Search, Filter } from 'lucide-react';

interface CampaignFiltersProps {
  onFilterChange: (filters: any) => void;
}

const CampaignFilters: React.FC<CampaignFiltersProps> = ({ onFilterChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [fundingRange, setFundingRange] = useState([0, 100]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    applyFilters();
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    applyFilters();
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    applyFilters();
  };

  const handleFundingChange = (value: number[]) => {
    setFundingRange(value);
    applyFilters();
  };

  const applyFilters = () => {
    onFilterChange({
      searchQuery,
      category,
      sortBy,
      fundingRange,
    });
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search input */}
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-10"
          />
        </div>
        
        {/* Category dropdown (always visible) */}
        <div className="w-full md:w-48">
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Environmental">Environmental</SelectItem>
              <SelectItem value="Technology">Technology</SelectItem>
              <SelectItem value="Humanitarian">Humanitarian</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Sort dropdown (always visible) */}
        <div className="w-full md:w-48">
          <Select value={sortBy} onValueChange={handleSortChange}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="endingSoon">Ending Soon</SelectItem>
              <SelectItem value="mostFunded">Most Funded</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Filter toggle button */}
        <Button 
          variant="outline" 
          onClick={toggleExpanded}
          className="md:w-auto"
        >
          <Filter className="h-4 w-4 mr-2" />
          {isExpanded ? "Less Filters" : "More Filters"}
        </Button>
      </div>
      
      {/* Expanded filters */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Funding Progress</label>
              <Slider
                defaultValue={fundingRange}
                max={100}
                step={1}
                onValueChange={handleFundingChange}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>{fundingRange[0]}%</span>
                <span>{fundingRange[1]}%</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Blockchain</label>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="justify-start"
                >
                  Ethereum
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="justify-start"
                >
                  ICP
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="justify-start"
                >
                  Polygon
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="justify-start"
                >
                  Others
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignFilters;
