import React from 'react';

export default function VideoPersonal() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">Video</h2>
      <p className="text-gray-600 mb-6 text-center">
        A continuación, se presenta el video explicativo correspondiente a los puntos requeridos en la asignación.
      </p>
      
      {/* Contenedor responsivo para el video de YouTube */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg border-2 border-pink-100">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/88kAXfUXUzA?si=2LpYljLOB8uhfgh0" 
          title="Video de Información"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}