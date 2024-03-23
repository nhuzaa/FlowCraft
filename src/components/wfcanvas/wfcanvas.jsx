import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Panel, MiniMap, Controls, Background, ControlButton } from 'reactflow';
import { useParams } from 'react-router-dom';
// Inside your component

import EmailNode from './nodetypes/emailnode';
import PhoneNode from './nodetypes/phonenode';
import CalendarNode from './nodetypes/calendar';
import ScheduleNode from './nodetypes/schedule';

import Modal from './modal';
import 'reactflow/dist/style.css';
import './style.css';
import { ICON_PLAY_BUTTON } from '../../constants/icons';
import Swal from 'sweetalert2';
import ControlPanel from './controlpanel/controlpanel';
import { NODE_TYPES, NODE_DATA } from './nodetypes';
import { saveNodesofWorkflow, executeWorkflow, fetchNodesofWorkflow } from '../../service/workflow';
import { convertNodesToFlow, convertFlowToApiData } from '../../utils/conversion';
import LogTable from './LogTable';
import { data } from 'autoprefixer';

const initialNodes = [
  { id: 'node-1', type: NODE_DATA.emailNode.type, position: { x: 0, y: 0 }, data: { label: 'Email' } },
  {
    id: 'node-2',
    type: NODE_DATA.phoneNode.type,
    targetPosition: 'top',
    position: { x: 0, y: 200 },
    data: { label: 'node 2' },
  },
  {
    id: 'node-3',
    type: 'output',
    targetPosition: 'top',
    position: { x: 200, y: 200 },
    data: { label: 'node 3' },
  },
];
const getNodeId = () => `randomnode_${+new Date()}`;


const initialEdges = [
  { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
  { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b' },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
// const nodeTypes = { emailNode: EmailNode, phoneNode: PhoneNode, calendarNode: CalendarNode, scheduleNode : ScheduleNode};

function Flow() {
  const [nodes, setNodes] = useState(null);
  const [edges, setEdges] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showLogs, setShowLogs] = useState(false);
  const [rfInstance, setRfInstance] = useState(null);
  const { id } = useParams();

  console.log('id', id);

  useEffect(() => {
    fetchNodesofWorkflow(id).then(([data, status]) => {
      console.log(data);
      if (status !== 200) {
        setNodes([])
        setEdges([])
        return null;
      }
      const [nds, edg] = convertNodesToFlow(data);
      console.log('nodes', nds, edg);
      setNodes(nds)
      setEdges(edg)
    }
    );
  }, []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const onNodeAdd = useCallback((type, label, position) => {
    console.log('onNodeAdd', type, label, position);
    const newNode = {
      id: getNodeId(),
      type: type,
      data: { label: label },
      position: { x: 200, y: 300 },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);


  // const onEmailAdd = useCallback(() => {
  //   const newNode = {
  //     id: getNodeId(),
  //     type: NODE_TYPES.phoneNode,
  //     data: { label: 'Added node' },
  //     position: { x: 200, y: 300 },
  //   };
  //   setNodes((nds) => nds.concat(newNode));
  // }, [setNodes]);

  // const onPhoneAdd = useCallback(() => {
  //   const newNode = {
  //     id: getNodeId(),
  //     type: NODE_TYPES.phoneNode,
  //     data: { label: 'Phone' },
  //     position: { x: 200, y: 350 },
  //   };
  //   setNodes((nds) => nds.concat(newNode));
  // }, [setNodes]);

  // const onCalendarAdd = useCallback(() => {
  //   const newNode = {
  //     id: getNodeId(),
  //     type: 'calendarNode',
  //     data: { label: 'Calendar' },
  //     position: { x: 250, y: 350 },
  //   };
  //   setNodes((nds) => nds.concat(newNode));
  // }, [setNodes]);

  // const onScheduleAdd = useCallback(() => {
  //   const newNode = {
  //     id: getNodeId(),
  //     type: 'scheduleNode',
  //     data: { label: 'Schedule' },
  //     position: { x: 250, y: 350 },
  //   };
  //   setNodes((nds) => nds.concat(newNode));
  // }, [setNodes]);

  const runWorkflow = () => {
    const data = {
      "patient": {
        "lastName": "string",
        "firstName": "string",
        "email": "email@email.com",
        "phone": "2323232323"
      },
      "appointment": {
        "dateTime": "2023-12-10T21:10:12.381Z",
        "patient": {
          "lastName": "string",
          "firstName": "string",
          "email": "email@email.com",
          "phone": "2323232323"
        },
        "location": "string",
        "provider": "string"
      }
    };

    executeWorkflow(id, data).then((data) => {
      console.log(data);
      setShowLogs(true);
    });

  }

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      console.log('type' , flow);
      const data = convertFlowToApiData(flow);
      saveNodesofWorkflow(id, data).then(([data, status]) => {

        console.log(data);

      })
    }
  }, [rfInstance]);


  const [viewport, setViewport] = useState({ x: 0, y: 0, zoom: 1 });

  useEffect(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      setViewport({
        x: Math.abs(flow.viewport.x),
        y: Math.abs(flow.viewport.y),
        zoom: Math.abs(flow.viewport.zoom),
      });
    }
  }, [rfInstance]);

  return (
    <>
      {nodes && edges ? (
        <>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setRfInstance}
            nodeTypes={NODE_TYPES}
            fitView
            onNodeDoubleClick={(event, element) => {
              setShowModal(true);
            }}
            viewport={{
              x: 0,
              y: 0,
              zoom: 1,
            }}
          >
            <Panel position="top-right">
              <ControlPanel onClick={onNodeAdd} />
              <button onClick={onSave}>save</button>
            </Panel>
            <MiniMap nodeStrokeWidth={3} />
            <Controls >
              <ControlButton onClick={runWorkflow}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </ControlButton>
              <ControlButton onClick={() => setShowLogs(!showLogs)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </ControlButton>
            </Controls>
            <Background color="#ccc" variant="dots" />

          </ReactFlow>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p>No data available</p>
        </div>
      )}

      {showLogs && <LogTable workflowId={id} showLogs={showLogs} handleToggle={() => setShowLogs(!showLogs)} />}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>

  );
}

export default Flow;

