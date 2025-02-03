import React from "react";

interface TimelineProps {
  children: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-[1.5px] bg-card-foreground/10"></div>
      <ul className="space-y-12 relative">{children}</ul>
    </div>
  );
};

interface TimelineItemProps {
  children: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ children }) => {
  return (
    <li className="relative pl-12">
      <div className="absolute left-0 top-0 h-8 w-8 rounded-full border-2 card-foreground/10 bg-background flex items-center justify-center">
        <div className="h-4 w-4 bg-card-foreground/10 rounded-full "></div>
      </div>
      {children}
    </li>
  );
};
