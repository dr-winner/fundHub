
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Plus, Trash2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';

const CampaignForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [milestones, setMilestones] = useState([{ title: '', percentage: 25, description: '' }]);
  const [uploading, setUploading] = useState(false);
  
  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      goal: '',
      currency: 'ETH',
      endDate: null,
    },
  });

  // Add a new milestone
  const addMilestone = () => {
    if (milestones.length < 5) {
      setMilestones([...milestones, { title: '', percentage: 0, description: '' }]);
    } else {
      toast({
        title: 'Maximum milestones reached',
        description: 'You can add up to 5 milestones per campaign.',
        variant: 'destructive',
      });
    }
  };

  // Remove a milestone
  const removeMilestone = (index: number) => {
    setMilestones(milestones.filter((_, i) => i !== index));
  };

  // Update milestone data
  const updateMilestone = (index: number, field: string, value: any) => {
    const updatedMilestones = milestones.map((milestone, i) => {
      if (i === index) {
        return { ...milestone, [field]: value };
      }
      return milestone;
    });
    setMilestones(updatedMilestones);
  };

  // Handle image upload simulation
  const handleImageUpload = () => {
    setUploading(true);
    // Simulate upload delay
    setTimeout(() => {
      setUploading(false);
      toast({
        title: 'Image uploaded successfully',
        description: 'Your campaign image has been uploaded.',
      });
    }, 2000);
  };

  // Submit the form
  const onSubmit = (data: any) => {
    // Combine form data with milestones
    const campaignData = {
      ...data,
      milestones,
    };
    
    console.log('Campaign data:', campaignData);
    
    // Simulate API call delay
    toast({
      title: 'Creating campaign...',
      description: 'Please wait while we setup your campaign.',
    });
    
    setTimeout(() => {
      toast({
        title: 'Campaign created successfully!',
        description: 'Your campaign has been created and is now live.',
      });
      navigate('/campaigns/1');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">Create a New Campaign</h2>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Campaign Image */}
            <div className="space-y-2">
              <FormLabel>Campaign Image</FormLabel>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                <div className="w-full h-40 bg-gray-100 mb-4 rounded flex items-center justify-center">
                  <span className="text-gray-500">Campaign Preview Image</span>
                </div>
                <Button 
                  type="button" 
                  onClick={handleImageUpload}
                  disabled={uploading}
                >
                  {uploading ? 'Uploading...' : 'Upload Image'}
                </Button>
                <p className="text-xs text-gray-500 mt-2">Recommended size: 1200 x 630 pixels</p>
              </div>
            </div>
            
            {/* Campaign Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter campaign title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Campaign Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your campaign and its goals..." 
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Campaign Category */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="environmental">Environmental</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="humanitarian">Humanitarian</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Funding Goal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="goal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Funding Goal</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ETH">ETH</SelectItem>
                        <SelectItem value="ICP">ICP</SelectItem>
                        <SelectItem value="BTC">BTC</SelectItem>
                        <SelectItem value="USDC">USDC</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* End Date */}
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>End Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date > new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                        }
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Milestones */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <FormLabel>Milestones</FormLabel>
                <Button
                  type="button"
                  onClick={addMilestone}
                  variant="outline"
                  size="sm"
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Milestone
                </Button>
              </div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Milestone {index + 1}</h4>
                    <Button
                      type="button"
                      onClick={() => removeMilestone(index)}
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 p-0 h-auto"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <FormLabel className="text-sm">Title</FormLabel>
                      <Input
                        placeholder="Milestone title"
                        value={milestone.title}
                        onChange={(e) => updateMilestone(index, 'title', e.target.value)}
                      />
                    </div>
                    <div>
                      <FormLabel className="text-sm">Funding Percentage</FormLabel>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          placeholder="25"
                          value={milestone.percentage}
                          onChange={(e) => updateMilestone(index, 'percentage', parseInt(e.target.value) || 0)}
                          min={0}
                          max={100}
                        />
                        <span>%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <FormLabel className="text-sm">Description</FormLabel>
                    <Textarea
                      placeholder="Describe what will be achieved in this milestone..."
                      value={milestone.description}
                      onChange={(e) => updateMilestone(index, 'description', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit" className="btn-gradient">
                Create Campaign
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default CampaignForm;
