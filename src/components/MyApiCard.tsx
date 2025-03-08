import { Brain } from "lucide-react"
import GradientImage from "../assets/images/gradient.png"
const MyApiCard = () => {
  return (
    <div className="w-[400px] h-[320px] rounded-[30px] overflow-hidden shadow-lg">
        <div className="w-full h-1/2 p-3 " style={{ backgroundImage: `url(${GradientImage})`}}>
            <div className="w-full h-full flex flex-col justify-between ">
                <div className="w-full h-10">
                    <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                        <Brain />
                    </div>
                </div>
                <div className="w-full h-2  flex justify-center items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-white"></div>
                    <div className="h-1 w-1 rounded-full bg-white"></div>
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                    <div className="h-1 w-1 rounded-full bg-white"></div>
                    <div className="h-1 w-1 rounded-full bg-white"></div>
                </div>
            </div>
        </div>
        <div className="w-full h-1/2 bg-white"></div>
    </div>
  )
}

export default MyApiCard