import React, { useState } from 'react';
import { numeroALetras } from '../utils/numberToWords';

export default function Traductor() {
  const [num, setNum] = useState('');
  const [texto, setTexto] = useState('');

  const handleTraduccion = (e) => {
    e.preventDefault();
    setTexto(numeroALetras(num));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Traductor de Números a Letras</h2>
      <form onSubmit={handleTraduccion} className="space-y-4">
        <input 
          type="number" 
          min="1" 
          max="1000"
          placeholder="Ingresa un número (1 - 1000)" 
          value={num} 
          onChange={(e) => setNum(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition">
          Traducir
        </button>
      </form>
      {texto && (
        <div className="mt-6 p-4 bg-blue-100 text-blue-800 font-bold text-center rounded uppercase tracking-wider shadow-inner">
          {texto}
        </div>
      )}
    </div>
  );
}