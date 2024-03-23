
export default function Root() {
    return (
      <div className="h-full flex flex-col bg-cyan-300 p-4">
        <h1 className="text-2xl font-bold mb-4">Workflow PN</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href={`/dashboard`} className="text-blue-500 hover:text-blue-700">Dashboard</a>
            </li>
            <li>
              <a href={`/workflow`} className="text-blue-500 hover:text-blue-700">Workflow</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }