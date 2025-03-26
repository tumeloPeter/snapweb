
import React from "react";
import { Home, Calendar, User } from "lucide-react";

interface BottomNavigationProps {
  active: string;
  onNavigate: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  active,
  onNavigate
}) => {
  return (
    <div className="bottom-nav">
      <button 
        className={`bottom-nav-item ${active === "home" ? "active" : ""}`}
        onClick={() => onNavigate("home")}
      >
        {active === "home" ? (
          <span>Home</span>
        ) : (
          <Home size={20} />
        )}
      </button>
      
      <button
        className={`bottom-nav-item ${active === "calendar" ? "active" : ""}`}
        onClick={() => onNavigate("calendar")}
      >
        {active === "calendar" ? (
          <span>Calendar</span>
        ) : (
          <Calendar size={20} />
        )}
      </button>
      
      <button
        className={`bottom-nav-item ${active === "profile" ? "active" : ""}`}
        onClick={() => onNavigate("profile")}
      >
        {active === "profile" ? (
          <span>Profile</span>
        ) : (
          <User size={20} />
        )}
      </button>
    </div>
  );
};

export default BottomNavigation;
