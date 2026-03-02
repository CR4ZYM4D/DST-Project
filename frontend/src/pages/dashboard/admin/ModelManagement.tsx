import React from 'react';
import { Cpu, Activity, RefreshCw, Settings, CheckCircle, AlertTriangle } from 'lucide-react';

const mockModels = [
  { id: 1, name: 'Leukemia Detector (Blood Smear)', version: 'v2.4.1', status: 'Deployed', accuracy: 98.2, lastTrained: 'Oct 15, 2025', type: 'Computer Vision' },
  { id: 2, name: 'Pneumonia Classifier (X-Ray)', version: 'v1.8.0', status: 'Deployed', accuracy: 96.5, lastTrained: 'Sep 28, 2025', type: 'Computer Vision' },
  { id: 3, name: 'Vitals Anomaly Predictor', version: 'v3.0.0-beta', status: 'Training', accuracy: 94.1, lastTrained: 'In Progress', type: 'Time-Series / NLP' },
];

const ModelManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-secondary">AI Model Management</h2>
          <p className="text-text-gray text-sm mt-1">Monitor, configure, and retrain diagnostic models.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
          <Cpu size={18} />
          Deploy New Model
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {mockModels.map((model) => (
          <div key={model.id} className="bg-white rounded-3xl shadow-card border border-gray-50 p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${model.status === 'Deployed' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                {model.status === 'Deployed' ? <Cpu size={24} /> : <RefreshCw size={24} className="animate-spin-slow" />}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                model.status === 'Deployed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
              }`}>
                {model.status}
              </span>
            </div>
            
            <h3 className="font-bold text-lg text-secondary mb-1">{model.name}</h3>
            <p className="text-xs text-text-gray mb-6">{model.type} • {model.version}</p>
            
            <div className="space-y-4 flex-1">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-secondary font-medium">Validation Accuracy</span>
                  <span className="font-bold text-primary">{model.accuracy}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: `${model.accuracy}%` }}></div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-text-gray">
                <Activity size={14} />
                Last Trained: {model.lastTrained}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex gap-2">
              <button className="flex-1 py-2 bg-gray-50 text-secondary rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <Settings size={16} /> Configure
              </button>
              <button 
                disabled={model.status === 'Training'}
                className="flex-1 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <RefreshCw size={16} /> Retrain
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Training Infrastructure Status */}
      <div className="bg-white rounded-3xl shadow-card border border-gray-50 p-6 mt-8">
        <h3 className="font-semibold text-lg text-secondary mb-6">Training Infrastructure</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-100 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-xs text-text-gray uppercase font-medium">GPU Cluster 1</p>
              <p className="font-bold text-secondary">Available (NVIDIA A100)</p>
            </div>
          </div>
          <div className="p-4 border border-gray-100 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
              <RefreshCw size={24} className="animate-spin-slow" />
            </div>
            <div>
              <p className="text-xs text-text-gray uppercase font-medium">GPU Cluster 2</p>
              <p className="font-bold text-secondary">In Use (Training Vitals)</p>
            </div>
          </div>
          <div className="p-4 border border-red-100 bg-red-50/30 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-xs text-red-500 uppercase font-medium">Storage Node</p>
              <p className="font-bold text-red-700">85% Capacity Reached</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelManagement;
