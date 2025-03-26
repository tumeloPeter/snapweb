
import React, { useState, useEffect } from "react";
import CircularProgress from "@/components/CircularProgress";
import ActivityItem from "@/components/ActivityItem";
import BottomNavigation from "@/components/BottomNavigation";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Zap, Star, Trophy } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [progress, setProgress] = useState(0);
  const [date, setDate] = useState("");
  const [activeProgressType, setActiveProgressType] = useState("daily");
  
  // Sample activities
  const activities = [
    { id: 1, title: "20min Meditation", duration: 21, status: "done" as const },
    { id: 2, title: "Morning Yoga", duration: 32, status: "done" as const },
    { id: 3, title: "Read a book", duration: 15, status: "pending" as const }
  ];

  useEffect(() => {
    // Format current date
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      day: '2-digit', 
      month: 'long'
    };
    setDate(today.toLocaleDateString('en-US', options));
    
    // Animate progress
    setTimeout(() => {
      setProgress(25);
    }, 500);
  }, []);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    // For demonstration purposes, we're just changing the active tab
    // In a real app, you might want to navigate to different views/pages
  };

  const handleProgressTypeChange = (type: string) => {
    setActiveProgressType(type);
  };

  // Progress type buttons that will appear on the home screen
  const renderProgressButtons = () => {
    return (
      <div className="w-full max-w-md space-y-3 mb-6">
        <Button 
          className={`w-full rounded-full flex items-center justify-start px-4 py-6 ${activeProgressType === 'daily' ? 'bg-mintgreen-dark text-black' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleProgressTypeChange('daily')}
        >
          <Zap className="mr-2" size={20} />
          <span>Daily Progress</span>
        </Button>
        
        <Button 
          className={`w-full rounded-full flex items-center justify-start px-4 py-6 ${activeProgressType === 'weekly' ? 'bg-mintgreen-dark text-black' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleProgressTypeChange('weekly')}
        >
          <Star className="mr-2" size={20} />
          <span>Weekly Progress</span>
        </Button>
        
        <Button 
          className={`w-full rounded-full flex items-center justify-start px-4 py-6 ${activeProgressType === 'monthly' ? 'bg-mintgreen-dark text-black' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleProgressTypeChange('monthly')}
        >
          <Trophy className="mr-2" size={20} />
          <span>Monthly Progress</span>
        </Button>
      </div>
    );
  };

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            {renderProgressButtons()}
            
            <div className="flex justify-center my-6">
              <CircularProgress 
                value={progress} 
                className="animate-pulse-gentle"
              />
            </div>
            
            <div className="flex-grow">
              {activities.map((activity) => (
                <ActivityItem
                  key={activity.id}
                  title={activity.title}
                  duration={activity.duration}
                  status={activity.status}
                />
              ))}
            </div>
          </>
        );
      case "calendar":
        return (
          <div className="flex-grow flex items-center justify-center p-4">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">Calendar View</h2>
              <p className="text-gray-600">Your schedule will appear here</p>
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="flex-grow flex items-center justify-center p-4">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">User Profile</h2>
              <p className="text-gray-600">Your profile information will appear here</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-mintgreen p-6">
      <div className="phone-frame">
        <div className="h-full flex flex-col justify-between">
          <Header name="Tumelo" date={date} />
          
          {renderContent()}
          
          <BottomNavigation
            active={activeTab}
            onNavigate={handleNavigate}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
