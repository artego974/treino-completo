import React, { useState } from "react";

function Card() {
  const cards = [
    { name: "TOTAL", descript: "convidados cadastrados" },
    { name: "CONFIRMADOS", descript: "check-in realizado" },
    { name: "PENDENTES", descript: "aguardando chegada" },
  ];
  return (
    <>
      {cards.map((card, i) => (
        <div
          key={i}
          className="w-1/5 rounded-3xl shadow-2xl m-3 border flex items-center justify-center flex-col min-h-30"
        >
          <p className="font-bold">{card.name}</p>
          <h1>0</h1>
          <p>{card.descript}</p>
        </div>
      ))}
    </>
  );
}

export default Card;
