import React, { useState } from 'react';

export default function TablaMultiplicar() {
  const [num, setNum] = useState('');
  const [tabla, setTabla] = useState([]);

  const handleTabla = (e) => {
    e.preventDefault();
    const base = parseInt(num);
    if (!isNaN(base)) {
      const filas = Array.from({ length: 13 }, (_, i) => `${base} x ${i + 1} = ${base * (i + 1)}`);
      setTabla(filas);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Tabla de Multiplicar </h2>
      <form onSubmit={handleTabla} className="space-y-4">
        <input 
          type="number" 
          placeholder="Introduce el número base" 
          value={num} 
          onChange={(e) => setNum(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition">
          Generar Tabla
        </button>
      </form>
      {tabla.length > 0 && (
        <div className="mt-6 max-h-64 overflow-y-auto border border-gray-200 rounded divide-y divide-gray-100 bg-gray-50 shadow-inner">
          {tabla.map((fila, index) => (
            <div key={index} className="p-2 text-center text-gray-700 font-medium">
              {fila}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}