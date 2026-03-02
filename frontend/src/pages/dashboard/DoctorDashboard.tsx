import React, { useState } from 'react';
import { Users, Activity, Brain, Plus, ChevronRight, Search } from 'lucide-react';
import { mockPatients } from '../../services/mockData';
import { Patient } from '../../types';
import AIAnalysisPanel from '../../components/dashboard/AIAnalysisPanel';

const DoctorDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = mockPatients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.phone.includes(searchTerm)
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-8rem)]">
      {/* Left Column: Stats & List */}
      <div className="lg:col-span-2 flex flex-col gap-8 h-full overflow-hidden">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 flex-shrink-0">
          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Users size={24} />
            </div>
            <div>
              <p className="text-text-gray text-xs font-medium uppercase">Total Patients</p>
              <h3 className="text-2xl font-bold text-secondary">1,240</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50 flex items-center gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-xl">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-text-gray text-xs font-medium uppercase">Critical Cases</p>
              <h3 className="text-2xl font-bold text-secondary">12</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50 flex items-center gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-xl">
              <Brain size={24} />
            </div>
            <div>
              <p className="text-text-gray text-xs font-medium uppercase">AI Scans</p>
              <h3 className="text-2xl font-bold text-secondary">48</h3>
            </div>
          </div>
        </div>

        {/* Patient List */}
        <div className="bg-white rounded-3xl shadow-card border border-gray-50 flex-1 flex flex-col overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center flex-shrink-0">
            <h3 className="font-semibold text-lg text-secondary">Patient Records</h3>
            <div className="flex gap-3">
               <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search name or phone..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary w-64"
                  />
               </div>
               <button className="flex items-center gap-2 text-sm bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition-colors">
                <Plus size={16} />
                Add Patient
              </button>
            </div>
          </div>
          
          <div className="overflow-y-auto flex-1">
            <table className="w-full">
              <thead className="bg-gray-50 text-left sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-text-gray uppercase">Name / ID</th>
                  <th className="px-6 py-4 text-xs font-semibold text-text-gray uppercase">Condition</th>
                  <th className="px-6 py-4 text-xs font-semibold text-text-gray uppercase">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold text-text-gray uppercase">Risk Score</th>
                  <th className="px-6 py-4 text-xs font-semibold text-text-gray uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredPatients.map((patient) => (
                  <tr 
                    key={patient.id} 
                    onClick={() => setSelectedPatient(patient)}
                    className={`hover:bg-gray-50 cursor-pointer transition-colors ${selectedPatient?.id === patient.id ? 'bg-blue-50/50' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-secondary">{patient.name}</div>
                      <div className="text-xs text-text-gray">{patient.age} yrs • {patient.gender}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary">{patient.condition}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        patient.status === 'Critical' ? 'bg-red-100 text-red-600' :
                        patient.status === 'Stable' ? 'bg-green-100 text-green-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-2">
                         <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                           <div 
                             className={`h-full rounded-full ${patient.riskScore > 70 ? 'bg-red-500' : 'bg-primary'}`} 
                             style={{ width: `${patient.riskScore}%` }}
                           ></div>
                         </div>
                         <span className="text-xs font-medium">{patient.riskScore}%</span>
                       </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-gray-200 rounded-full text-secondary">
                        <ChevronRight size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Column: AI & Details */}
      <div className="h-full overflow-hidden">
        {selectedPatient ? (
          <AIAnalysisPanel patient={selectedPatient} />
        ) : (
          <div className="bg-white rounded-3xl shadow-card border border-gray-50 p-6 flex flex-col h-full items-center justify-center text-center text-text-gray opacity-50">
             <Brain size={48} className="mb-4" />
             <p>Select a patient to view details and run AI diagnostics.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;
