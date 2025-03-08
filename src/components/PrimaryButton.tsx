import React from "react";
import { LucideIcon } from "lucide-react";

interface PrimaryButtonProps {
  title: string;
  Icon?: LucideIcon; // Optional Lucide icon component
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, Icon }) => {
  return (
    <div className="w-auto p-4 h-8 rounded-full bg-black text-white text-[14px] flex justify-center items-center gap-1 cursor-pointer">
      {Icon && <Icon className="w-4 h-4" />} {/* Render icon if provided */}
      <span>{title}</span>
    </div>
  );
};

export default PrimaryButton;
