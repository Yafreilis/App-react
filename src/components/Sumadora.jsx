import React, { useState } from 'react';

export default function Sumadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleSuma = (e) => {
    e.preventDefault();
    setResultado(Number(num1) + Number(num2));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sumadora</h2>
      <form onSubmit={handleSuma} className="space-y-4">
        <input 
          type="number" 
          placeholder="Primer número" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
        <input 
          type="number" 
          placeholder="Segundo número" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />
        <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition">
          Calcular Suma
        </button>
      </form>
      {resultado !== null && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 font-bold text-center rounded text-xl shadow-inner">
          Resultado: {resultado}
        </div>
      )}
    </div>
  );
}