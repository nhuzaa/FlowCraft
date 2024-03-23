import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Wfcanvas from './components/wfcanvas';
import Dashboard from './components/dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
          <Dashboard />
      </div>
  )
}

export default App
