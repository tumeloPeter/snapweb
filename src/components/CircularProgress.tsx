
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
  bgColor?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 160,
  strokeWidth = 12,
  className,
  color = "#92D18D",
  bgColor = "#222222"
}) => {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const valueInPercent = Math.min(100, Math.max(0, value));

  useEffect(() => {
    const progressOffset = ((100 - valueInPercent) / 100) * circumference;
    
    // Small delay for animation
    const timer = setTimeout(() => {
      setProgress(valueInPercent);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [valueInPercent, circumference]);

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        style={{ 
          "--progress-value": `${progress} 100`,
        } as React.CSSProperties}
      >
        <circle
          className="transition-all duration-300"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={bgColor}
          fill="none"
        />
        <circle
          className="animate-progress-circle"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${progress} 100`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-semibold text-4xl">
        {valueInPercent}%
      </div>
    </div>
  );
};

export default CircularProgress;
