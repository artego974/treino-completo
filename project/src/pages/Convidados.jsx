import React, { useState } from "react";
import Nav from "../components/Nav";
import CardUser from "../components/CardUser";

function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Novo Convidado</h2>
        <input
          type="text"
          placeholder="Nome"
          className="border rounded-lg px-4 py-2.5 text-sm outline-none"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="border rounded-lg px-4 py-2.5 text-sm outline-none"
        />
        <input
          type="text"
          placeholder="Mesa"
          className="border rounded-lg px-4 py-2.5 text-sm outline-none"
        />
        <select className="border rounded-lg px-4 py-2.5 text-sm outline-none text-gray-600">
          <option value="">Status</option>
          <option>Check-in</option>
          <option>Pendente</option>
        </select>
        <div className="flex justify-end gap-3 mt-2">
          <button
            onClick={onClose}
            className="border border-gray-300 text-sm px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Cancelar
          </button>
          <button className="bg-black text-white text-sm px-4 py-2.5 rounded-lg">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

function Convidados() {
  const [modal, setModal] = useState(false);

  return (
    <div className="min-h-screen flex bg-white">
      <div className="h-screen w-1/5">
        <Nav />
      </div>
      <div className="flex-1 p-8">
        <div className="flex items-center gap-3 mb-8">
          <input
            type="text"
            placeholder="Pesquisar"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none"
          />
          <button
            onClick={() => window.print()}
            className="border border-gray-300 text-sm px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            ↓ Exportar CSV
          </button>
          <button
            onClick={() => setModal(true)}
            className="bg-black text-white text-sm px-4 py-2.5 rounded-lg hover:bg-gray-900 transition-colors"
          >
            + Novo convidado
          </button>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              {["NOME", "E-MAIL", "MESA", "STATUS", "AÇÕES"].map((col) => (
                <th
                  key={col}
                  className="text-left px-4 py-3 text-xs font-semibold text-gray-400"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <CardUser />
          </tbody>
        </table>
      </div>
      {modal && <Modal onClose={() => setModal(false)} />}
    </div>
  );
}

export default Convidados;
