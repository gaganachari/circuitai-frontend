import React from "react";
import { LucideIcon } from "lucide-react";

interface TextBubbleProps {
  title: string;
  Icon?: LucideIcon; // Optional Lucide icon component
}

const TextBubble: React.FC<TextBubbleProps> = ({ title, Icon }) => {
  return (
    <div className="w-auto px-4 h-8 rounded-full bg-white text-black text-[14px] flex justify-center items-center gap-1 cursor-pointer">
      {Icon && <Icon className="w-4 h-4" />} {/* Render icon if provided */}
      <span>{title}</span>
    </div>
  );
};

export default TextBubble;
