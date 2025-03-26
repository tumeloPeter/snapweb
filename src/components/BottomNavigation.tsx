
import React from "react";
import { Home, Grid, Play } from "lucide-react";

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
        <span>Home</span>
      </button>
      <button
        className="p-2 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors"
        onClick={() => onNavigate("grid")}
      >
        <Grid size={20} />
      </button>
      <button
        className="p-2 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors"
        onClick={() => onNavigate("play")}
      >
        <Play size={20} />
      </button>
    </div>
  );
};

export default BottomNavigation;
