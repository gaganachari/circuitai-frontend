import { BezierEdge, EdgeLabelRenderer, EdgeProps, getBezierPath, useReactFlow } from "@xyflow/react";
import { X } from "lucide-react";

export default function CustomEdge(props: EdgeProps) {
  const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition } = props;

  const {setEdges} = useReactFlow()

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition
  });

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <div
          className="nodrag nopan"
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          } }
        >
          <X className="w-4 h-4 stroke-red-500" onClick={()=> setEdges(prevEdges=>prevEdges.filter(edge=>edge.id!==id))}/>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}