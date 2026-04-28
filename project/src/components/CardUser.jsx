import React from "react";

const convidados = [
  {
    id: 1,
    nome: "Ana Medeiros",
    email: "ana@email.com",
    mesa: "Mesa 3",
    status: "Check-in",
  },
  {
    id: 2,
    nome: "Bruno Ramos",
    email: "bruno@email.com",
    mesa: "Mesa 1",
    status: "Pendente",
  },
  {
    id: 3,
    nome: "Carla Silva",
    email: "carla@email.com",
    mesa: "Mesa 5",
    status: "Check-in",
  },
];

function CardUser() {
  return convidados.map((c) => (
    <tr
      key={c.id}
      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
    >
      <td className="px-4 py-4 text-sm font-medium text-gray-900">{c.nome}</td>
      <td className="px-4 py-4 text-sm text-gray-500">{c.email}</td>
      <td className="px-4 py-4 text-sm text-gray-500">{c.mesa}</td>
      <td className="px-4 py-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            c.status === "Check-in"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {c.status}
        </span>
      </td>
      <td className="px-4 py-4">
        <div className="flex gap-4">
          <button className="text-sm text-gray-600 hover:text-blue-400 transition-colors">
            Editar
          </button>
          <button className="text-sm text-gray-600 hover:text-red-600 transition-colors">
            Excluir
          </button>
        </div>
      </td>
    </tr>
  ));
}

export default CardUser;
