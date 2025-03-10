import { Handle, NodeProps, Position } from "@xyflow/react";

export default function PaymentInit({data:{amount}}:NodeProps<{amount:number}>) {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md flex flex-col gap-2">
        <p>Payment Initialised</p>
        <div className="bg-gray-50 p-2 rounded-lg text-sm">
            
        $ {amount}
        </div>
        <Handle type="source" position={Position.Right}/>
    </div>
  )
}
