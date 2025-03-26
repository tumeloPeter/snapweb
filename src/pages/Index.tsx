
import React, { useState, useEffect } from "react";
import CircularProgress from "@/components/CircularProgress";
import ActivityItem from "@/components/ActivityItem";
import BottomNavigation from "@/components/BottomNavigation";
import Header from "@/components/Header";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [progress, setProgress] = useState(0);
  const [date, setDate] = useState("");
  
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
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-mintgreen p-6">
      <div className="phone-frame">
        <div className="h-full flex flex-col justify-between">
          <Header name="Tumelo" date={date} />
          
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
