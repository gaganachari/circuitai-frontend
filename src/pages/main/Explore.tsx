import { useState } from "react";
import { Search, Filter, Star, Download, Heart } from "lucide-react";

const categories = ["All", "AI Tools", "Data Processing", "Media", "Communication", "Analytics"];

const apiItems = new Array(6).fill({
  title: "AI Chatbot API",
  description: "Create a custom AI chatbot trained on your data...",
  rating: 4.5,
  installs: "5k install",
  price: "$19.99/mo",
});

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-b-xl text-white text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="relative w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-900 focus:outline-none"
            />
          </div>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center gap-2">
            <Filter size={16} /> Filter
          </button>
        </div>
        {/* Category Filters */}
        <div className="flex justify-center gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-white text-gray-900" : "bg-white/20"
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
        {apiItems.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md relative">
            {/* Gradient Background */}
            <div className={`h-28 w-full rounded-lg bg-gradient-to-r from-purple-${index*100} to-indigo-${index*100+300}`} />
            <Heart className="absolute top-4 right-4 text-gray-500 cursor-pointer" size={16} />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                <Star className="text-yellow-500" size={16} /> {item.rating}
                <Download size={16} /> {item.installs}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button className="border px-4 py-2 rounded-full">Try for free</button>
                <button className="bg-black text-white px-4 py-2 rounded-full">{item.price}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}