import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#121212] text-white">
      <Sidebar />

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Manage your projects</h2>
          <button className="bg-lime-400 text-black px-5 py-2 rounded-full font-semibold">
            Create
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Chart placeholder */}
          <div className="col-span-2 bg-[#1c1c1c] rounded-2xl p-6 h-64">
            <h3 className="mb-4">Team Earnings</h3>
            <div className="h-full flex items-center justify-center text-gray-500">
              (Gráfico)
            </div>
          </div>

          {/* Task list */}
          <div className="bg-[#1c1c1c] rounded-2xl p-6">
            <h3 className="mb-4">Task List</h3>
            <ul className="space-y-3">
              <li className="p-3 rounded bg-[#2a2a2a]">Statistical analysis</li>
              <li className="p-3 rounded bg-lime-400 text-black">
                Data mining
              </li>
              <li className="p-3 rounded bg-[#2a2a2a]">Data quality</li>
              <li className="p-3 rounded bg-[#2a2a2a]">Performance</li>
            </ul>
          </div>

          {/* Team rating */}
          <div className="bg-lime-400 text-black rounded-2xl p-6">
            <h3 className="mb-4 font-bold">Team Rating</h3>
            <div className="flex justify-between">
              <div>
                Fulano
                <br />
                $22k
              </div>
              <div>
                Ciclano
                <br />
                $21k
              </div>
              <div>
                Alabano
                <br />
                $18k
              </div>
              <div>
                Zé
                <br />
                $16k
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="bg-[#1c1c1c] rounded-2xl p-6">
            <h3 className="mb-4">Performance</h3>
            <div className="h-32 flex items-center justify-center text-gray-500">
              (Gráfico linha)
            </div>
          </div>

          {/* Activity */}
          <div className="bg-[#1c1c1c] rounded-2xl p-6">
            <h3 className="mb-4">Day Activity</h3>
            <div className="h-32 flex items-center justify-center text-gray-500">
              (Gráfico donut)
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
