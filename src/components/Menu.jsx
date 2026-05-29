import React from 'react';

export default function Menu({ activeTab, setActiveTab }) {
  const opciones = [
    { id: 'inicio', label: ' Página Inicial' },
    { id: 'sumadora', label: ' Sumadora' },
    { id: 'traductor', label: 'Traductor 1-1000' },
    { id: 'tabla', label: ' Tabla Multiplicar' },
  ];

  return (
    <nav className="bg-indigo-700 text-white w-full md:w-64 p-6 flex flex-col gap-2 shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-center border-b border-indigo-500 pb-3">Menú</h2>
      {opciones.map((opcion) => (
        <button
          key={opcion.id}
          onClick={() => setActiveTab(opcion.id)}
          className={`p-3 text-left rounded transition ${
            activeTab === opcion.id ? 'bg-indigo-900 font-bold shadow' : 'hover:bg-indigo-600'
          }`}
        >
          {opcion.label}
        </button>
      ))}
    </nav>
  );
}