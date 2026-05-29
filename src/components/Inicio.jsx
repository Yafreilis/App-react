import React from 'react';

export default function Inicio() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Informacón personal</h2>
      <div className="flex justify-center mb-4">
        <img 
          src="/tarea.png" 
          alt="Yafreilis Cuevas Santana" 
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-md"
        />
      </div>
      <div className="space-y-2 mt-4 text-left border-t pt-4 border-gray-100">
        <p className="text-lg text-gray-600"><strong>Nombre:</strong> Yafreilis</p>
        <p className="text-lg text-gray-600"><strong>Apellido:</strong> Cuevas Santana</p>
        <p className="text-lg text-gray-600"><strong>Matrícula:</strong> 2022-0656</p>
        <p className="text-lg text-gray-600"><strong>Correo:</strong> 20220656@itla.edu.do</p>
      </div>
    </div>
  );
}