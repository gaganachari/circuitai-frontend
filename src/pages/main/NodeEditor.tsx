import { addEdge, Background, Connection, Controls, Edge, Node, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import { useCallback } from "react";
import { initialEdges,initialNodes } from "../../constants/Workflow.constants";
import PaymentInit from "../../components/NodeEditorComp/PaymentInit";
import PaymentCountry from "../../components/NodeEditorComp/PaymentCountry";
import PaymentProvider from "../../components/NodeEditorComp/PaymentProvider";
import PaymentProviderSelect from "../../components/NodeEditorComp/PaymentProviderSelect";

const nodeTypes = {
  paymentInit:PaymentInit,
  paymentCountry:PaymentCountry,
  paymentProvider:PaymentProvider,
  paymentProviderSelect:PaymentProviderSelect
}




export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((connection:Connection)=>{
    const edge ={...connection, animated:true, id:`${edges.length} + 1`}
    setEdges(prevEdges=>addEdge(edge, prevEdges))
  },[])

 
  return (
    <div className='w-full h-full'> 
      <ReactFlow 
      nodes={nodes} 
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange} 
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      >
        <Background/>
        <Controls/>
      </ReactFlow>
    </div>
  );
}