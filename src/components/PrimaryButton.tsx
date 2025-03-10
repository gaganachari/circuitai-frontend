import React from "react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

interface PrimaryButtonProps {
  title: string;
  Icon?: LucideIcon;
  Path?: string; // Optional Lucide icon component
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, Icon, Path = "#" }) => {
  const notify = () => toast("Does not exist yet");
  return (
    <Link to={Path} onClick={notify} className="w-auto p-4 h-8 rounded-full bg-black text-white text-[14px] flex justify-center items-center gap-1 cursor-pointer">
      {Icon && <Icon className="w-4 h-4" />} {/* Render icon if provided */}
      <span>{title}</span>
      <ToastContainer 
      position="bottom-right"
      autoClose={2000}
      />
    </Link>
    
  );
};

export default PrimaryButton;
