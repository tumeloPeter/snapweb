
import React, { useState, useEffect } from "react";
import CircularProgress from "@/components/CircularProgress";
import ActivityItem from "@/components/ActivityItem";
import BottomNavigation from "@/components/BottomNavigation";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Zap, Star, Trophy } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [progress, setProgress] = useState(0);
  const [date, setDate] = useState("");
  const [activeProgressType, setActiveProgressType] = useState("daily");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
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
    if (tab === "calendar") {
      // Instead of navigating, open the sheet
      setIsSheetOpen(true);
      return;
    }
    
    setActiveTab(tab);
  };

  const handleProgressTypeChange = (type: string) => {
    setActiveProgressType(type);
    setIsSheetOpen(false); // Close the sheet after selection
  };

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <div className="flex justify-center my-8">
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
          
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetContent side="bottom" className="rounded-t-[20px] px-4 py-5">
              <SheetHeader className="mb-4">
                <SheetTitle className="text-center">Progress View</SheetTitle>
                <SheetDescription className="text-center">
                  Select the type of progress you want to view
                </SheetDescription>
              </SheetHeader>
              <div className="w-full max-w-md space-y-3 mx-auto">
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
            </SheetContent>
          </Sheet>
          
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
