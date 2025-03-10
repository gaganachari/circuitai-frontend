import { Handle, NodeProps, Position } from "@xyflow/react";
import ReactCountryFlag from "react-country-flag";

export default function PaymentCountry({data:{currency, country, countryCode}}:NodeProps<{currency:string, country:string, countryCode:string}>) {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md flex flex-col gap-2">
         <p>Payment Initialised</p>
            <div className="w-full flex justify-between gap-1">
            <div className="bg-gray-50 p-2 rounded-lg text-sm"> 
                <ReactCountryFlag countryCode={countryCode} svg/>
            </div>
            <div className="w-full bg-gray-50 p-2 rounded-lg text-sm"> {country}</div>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg text-sm"> {currency}</div>
            <Handle type="source" position={Position.Right}/>
            <Handle type="target" position={Position.Left}/>
            
    </div>
  )
}
