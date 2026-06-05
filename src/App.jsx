import React, { useState } from 'react';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import Sumadora from './components/Sumadora';
import Traductor from './components/Traductor';
import TablaMultiplicar from './components/TablaMultiplicar';
import VideoPersonal from './components/VideoPersonal';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  {activeTab === 'video' && <VideoPersonal />}

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio':
        return <Inicio />;
      case 'sumadora':
        return <Sumadora />;
      case 'traductor':
        return <Traductor />;
      case 'tabla':
        return <TablaMultiplicar />;
      case 'video':
      return <VideoPersonal />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row font-sans">
     
      <Menu activeTab={activeTab} setActiveTab={setActiveTab} />


      <main className="flex-1 p-8 flex justify-center items-start">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg transition-all duration-300">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}