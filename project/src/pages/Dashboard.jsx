import React from 'react'
import Nav from '../components/Nav'
import Card from "../components/Card"

function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <div className="h-screen w-1/5 bg-neutral-100">
        <Nav />
      </div>
      <div className="w-full flex items-center flex-col mt-10 p-5">
        <h1 className="font-extrabold text-5xl ">Bem-vindo</h1>
        <p>Visão geral do evento</p>
        <div className="w-full mt-10 h-full flex flex-wrap justify-center gap-5">
          <Card />
          <div className="w-3/4 border shadow-2xl h-1/2 rounded-xl ">
            {/* chart que depois é so puxar do componente */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard