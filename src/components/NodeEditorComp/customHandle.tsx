import { Handle, HandleProps } from "@xyflow/react";

export default function CustomHandle(props:HandleProps) {
  return (
    <Handle style={{width:12,height:12,background:'black'}} {...props}/>
  )
}
