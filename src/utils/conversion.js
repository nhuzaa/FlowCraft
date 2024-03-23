
export const convertNodesToFlow = (apiData) => {
    const initialNodes = [];
    const initialEdges = [];
  
    // Convert nodes
    apiData.nodes.forEach((node) => {
      const convertedNode = {
        id: `node-${node.id}`,
        type: node.type,
        position: { x: node.position.x , y: node.position.y }, // Adjust position as needed
        data: { label: node.name },
      };
      initialNodes.push(convertedNode);
    });
  
    // Convert connections to edges
    apiData.connections.forEach((connection, index) => {
      const edgeType = connection.type.toLowerCase() === 'true' ? 'output' : 'default';
      const sourceNode = initialNodes.find((node) => node.id === `node-${connection.node1}`);
      const targetNode = initialNodes.find((node) => node.id === `node-${connection.node2}`);
  
      if (sourceNode && targetNode) {
        const convertedEdge = {
          id: `edge-${index + 1}`,
          source: sourceNode.id,
          target: targetNode.id,
          sourceHandle: 'a', // You may adjust this as needed
        };
        initialEdges.push(convertedEdge);
      }
    });
  
    return [ initialNodes, initialEdges ];
  }

const nodetypereturn = (nodetype) => {
  if (nodetype === 'IfNode'){
    return 'IfHasEmailCondition'
  }

  if (nodetype === 'emailNode'){
    return 'SendEmail'
  }

  if (nodetype === 'phoneNode'){
    return 'SendSms'
  }

  return nodetype

}


export const convertFlowToApiData = (flowData) => {
  const apiData = {
    nodes: flowData.nodes.map((node) => ({
      id: node.id,
      name: node.data.label,
      type: nodetypereturn(node.type),
      position: {
        x: Math.abs(Math.round(node.position.x)),
        y: Math.abs(Math.round(node.position.y)),
      },
    })),
    connections: flowData.edges.map((edge) => {
      const sourceNode = flowData.nodes.find(node => node.id === edge.source);
      const targetType = sourceNode && (sourceNode.type === 'IfHasEmailCondition' || sourceNode.type ==='IfHasPhoneCondition') ? 'true' : 'Default';
      return {
        node1: edge.source,
        node2: edge.target,
        type: targetType,
      };
    }),
  };

  return apiData;
};
