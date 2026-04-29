export default function Sidebar() {
    return (
      <aside className="w-64 bg-[#1a1a1a] p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-8">TEAMVIEW</h1>
  
          <nav className="space-y-3">
            <div className="p-3 rounded-lg hover:bg-[#2a2a2a]">Home</div>
            <div className="p-3 rounded-lg bg-lime-400 text-black font-semibold">
              Dashboard
            </div>
            <div className="p-3 rounded-lg hover:bg-[#2a2a2a]">Statistics</div>
            <div className="p-3 rounded-lg hover:bg-[#2a2a2a]">Settings</div>
          </nav>
        </div>
      </aside>
    )
  }