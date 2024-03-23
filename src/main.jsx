import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Dashboard from './components/dashboard/dashboard.jsx';
import Wfcanvas from './components/wfcanvas/index.jsx';
import WorkflowForm from './workflow-form.jsx'
import { WORKFLOW_CREATE } from './constants/routes.js'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/workflow",
    element: <Wfcanvas />,
  },
  {
    path: "/workflow/:id",
    element: <Wfcanvas />,
  },
  {
    path: WORKFLOW_CREATE,
    element: <WorkflowForm />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="App flex">
      <div className="w-1/4 bg-gray-200 h-screen">
        <Root />
      t </div>
      <div className="w-3/4">
        <RouterProvider router={router}>
          <Outlet />
        </RouterProvider>
      </div>
    </div>
  </React.StrictMode>,
)
