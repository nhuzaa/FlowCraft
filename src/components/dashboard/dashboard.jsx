
import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Assuming you have a CSS file for styling
// import { fetchWorkflows } from '../../mockdata/workflowData';
import { Link } from "react-router-dom";

import { fetchWorkflows } from '../../service/workflow';
import { WORKFLOW_CREATE } from '../../constants/routes';


const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchWorkflows().then((data) => {
      console.log(data);
      setData(data)
    }
      );
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4 text-orange-500	">
    <h1 className="col-span-full text-3xl font-bold underline mb-4">Dashboard</h1>
    <Link to={WORKFLOW_CREATE}>
      <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create New Workflow
      </button>
    </Link>
    {data?.items?.length > 0 ? data.items.map((item, index) => (
      <Link to={`/workflow/${item.id}`} key={item.id}>
      <div key={index.id} className="border p-4 rounded shadow text-amber-700 hover:shadow-lg hover:bg-blue-100 transition duration-200 ease-in-out">
        <h2 className="text-xl font-bold mb-2">{item.name || 'Dummy name'}</h2>
        <p className="mb-2">{item.description || 'Dummy description'}</p>
        <p>Active: {item.active ? 'Yes' : 'No'}</p>
        <p className="mb-2">
          Last executed: 
          {item.lastExecution ? new Date(item.lastExecution).toLocaleDateString() + ' ' + new Date(item.lastExecution).toLocaleTimeString() : 'N/A'}
        </p>
      </div>
    </Link>
    ))
  : <div className="text-2xl font-bold">No workflows found</div>}
  </div>
  );
};

export default Dashboard