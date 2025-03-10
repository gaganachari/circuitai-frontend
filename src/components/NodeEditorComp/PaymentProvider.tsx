
import { Handle, NodeProps, Position, useReactFlow } from "@xyflow/react";
import { EyeClosed } from "lucide-react";


  

export default function PaymentProvider({data:{name,code},id}:NodeProps<{name:string, code:string}>) {
    const {setNodes} = useReactFlow();
  return (
    <div className="bg-white p-2 rounded-lg shadow-md flex flex-col gap-2">PaymentProvider
        <div className="w-full flex justify-between gap-1">
          <div className="bg-gray-50 w-full p-2 rounded-lg text-sm">
            {name}
            </div>  
          <div className="bg-gray-50 p-2 rounded-lg text-sm">
            {code}
            </div>
            <div className="cursor-pointer">
            <EyeClosed size={24} onClick={()=>setNodes((prevNodes)=>prevNodes.filter(node=>node.id!==id))}/>
            </div>  
        </div>
        <Handle type="target" position={Position.Left}/>
    </div>
  )
}
