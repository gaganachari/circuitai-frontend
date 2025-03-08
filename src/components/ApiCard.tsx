import { Star, Download, Heart } from "lucide-react";

interface ApiCardProps {
    title: string;
    description: string;
    rating: number;
    installs: number;
    price: string;
}


export const ApiCard: React.FC<ApiCardProps> = ({title,description,rating,installs,price}) => {
  return (
    <div className="bg-white pb-4 rounded-lg shadow-md relative">
            {/* Gradient Background */}
            <div className={`h-28 w-full rounded-lg rounded-b-none bg-gradient-to-r from-purple-100 to-indigo-100`} />
            <Heart className="absolute top-4 right-4 text-gray-500 cursor-pointer" size={16} />
            <div className="mt-4 p-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-500 text-sm">{description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                <Star className="text-yellow-500" size={16} /> {rating}
                <Download size={16} /> {installs}
              </div>
              <div className="mt-4 flex justify-between items-center md:flex-col md:items-start">
                <button className="border px-4 py-2 rounded-full">Try for free</button>
                <button className="bg-black text-white px-4 py-2 rounded-full">{price}</button>
              </div>
            </div>
          </div>
  )
}
