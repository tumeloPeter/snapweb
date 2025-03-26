
import React from "react";
import { Circle, CheckCircle, Clock } from "lucide-react";

interface ActivityItemProps {
  title: string;
  duration: number;
  status: "done" | "pending";
  onClick?: () => void;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  duration,
  status,
  onClick
}) => {
  return (
    <div 
      className="activity-item animate-fade-in-up opacity-0"
      style={{ animationDelay: `${Math.random() * 0.3 + 0.1}s` }}
      onClick={onClick}
    >
      <div className="flex items-center">
        {status === "done" ? (
          <CheckCircle size={18} className="text-mintgreen mr-2" />
        ) : (
          <Circle size={18} className="text-blue-500 mr-2" />
        )}
        <span className="font-medium">{title}</span>
      </div>
      <div className="flex items-center">
        <span className="text-sm bg-white/20 px-2 py-1 rounded-full mr-2">{duration} min</span>
        {status === "pending" && (
          <Clock size={18} className="text-zinc-700" />
        )}
      </div>
    </div>
  );
};

export default ActivityItem;
