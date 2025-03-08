import SearchInput from "./SearchInput"
import TextBubble from "./TextBubble"
import { Library,Globe,Bookmark  } from 'lucide-react';
const SearchSection = () => {
  return (
    <div className="w-full h-30 text-white flex flex-col gap-4 justify-center items-center"> 
      <SearchInput darkMode={true}/>
      <div className="flex gap-4">
        <TextBubble title="My" Icon={Library }/>
        <TextBubble title="Community" Icon={Globe}/>
        <TextBubble title="Saved" Icon={Bookmark}/>
      </div>
    </div>
  )
}

export default SearchSection