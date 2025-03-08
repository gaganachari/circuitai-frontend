import { Search } from "lucide-react";
import React from "react";

interface SearchInputProps {
  darkMode?: boolean; // If true, text and icon will be black
}

const SearchInput: React.FC<SearchInputProps> = ({ darkMode = false }) => {
  const textColor = darkMode ? "text-black" : "text-white";
  const borderColor = darkMode ? "border-black/20" : "border-white/20";
  const bgColor = darkMode ? "bg-white" : "bg-white/10";

  return (
    <div className={`relative w-1/2 ${bgColor} backdrop-blur-md ${borderColor} border shadow-lg rounded-full`}>
      <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textColor}`} size={16} />
      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
        className={`w-full pl-10 pr-4 py-2 rounded-full ${textColor} focus:outline-none bg-transparent`}
      />
    </div>
  );
};

export default SearchInput;