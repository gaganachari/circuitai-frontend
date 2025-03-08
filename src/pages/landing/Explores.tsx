import { useState } from "react";
import { Filter} from "lucide-react";
import { ApiCard } from "../../components/ApiCard";
import { apiData } from "../../constants/constants";
import TextBubble from "../../components/TextBubble";
import SearchInput from "../../components/SearchInput";

const categories = ["All", "AI Tools", "Data Processing", "Media", "Communication", "Analytics"];


export default function Explores() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-10  text-white text-center">
        <div className="w-full h-10 flex items-center">
          <TextBubble title="Explore" />
        </div>
        <div className="flex justify-center items-center gap-2 mb-4 ">
          <SearchInput/>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg  text-white px-4 py-2 rounded-full flex items-center gap-2">
            <Filter size={16} /> Filter
          </button>
        </div>
        {/* Category Filters */}
        <div className="flex justify-center gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-black text-white" : "bg-white/20"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* API Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {apiData.map((api, index) => (
        <ApiCard key={index} 
        title={api.title}
        description={api.description}
        rating={api.rating}
        installs={api.installs}
        price={api.price}
        />
      ))}
      </div>
    </div>
  );
}