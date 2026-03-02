import React from 'react';
import { Activity, Thermometer } from 'lucide-react';
import Chatbot from '../../components/patient/Chatbot';

const PatientDashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Vitals Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-blue-50 text-blue-500 rounded-lg"><Activity size={20} /></div>
               <span className="text-sm text-text-gray font-medium">Blood Pressure</span>
             </div>
             <div className="flex items-baseline gap-2">
               <h3 className="text-3xl font-bold text-secondary">120/80</h3>
               <span className="text-sm text-text-gray">mmHg</span>
             </div>
             <p className="text-xs text-green-600 mt-2">Optimal</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-orange-50 text-orange-500 rounded-lg"><Thermometer size={20} /></div>
               <span className="text-sm text-text-gray font-medium">Temperature</span>
             </div>
             <div className="flex items-baseline gap-2">
               <h3 className="text-3xl font-bold text-secondary">98.6</h3>
               <span className="text-sm text-text-gray">°F</span>
             </div>
             <p className="text-xs text-green-600 mt-2">Normal</p>
          </div>
        </div>
      </div>

      {/* Right Column: Chatbot */}
      <div>
        <Chatbot />
      </div>
    </div>
  );
};

export default PatientDashboard;
