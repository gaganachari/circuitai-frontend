import MyApiCard from "../../components/MyApiCard";
import PrimaryButton from "../../components/PrimaryButton";
import SearchSection from "../../components/SearchSection";
import TextBubble from "../../components/TextBubble";
import { KeyRound } from 'lucide-react';

const MyAPIs = () => {

    return <div className="flex h-screen flex-col">
      <div className="w-full h-14  flex items-center px-3">
        <TextBubble title="My APIs" />
      </div>
      <div className="w-full h-14 flex justify-end items-center px-3">
        <PrimaryButton title="Create New" Icon={KeyRound}  />
      </div>
      <SearchSection/>
      <div className="w-full flex-1 flex justify-center flex-wrap gap-3 p-4">
        <MyApiCard/>
        <MyApiCard/>
        <MyApiCard/>
        <MyApiCard/>
        <MyApiCard/>
        <MyApiCard/>
      </div>
      
    </div>;
  };
  
  export default MyAPIs;
  