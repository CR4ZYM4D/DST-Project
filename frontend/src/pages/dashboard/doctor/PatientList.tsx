import React, { useState } from 'react';
import { Search, Plus, Filter, ChevronRight, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockPatients } from '../../../services/mockData';

const PatientList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredPatients = mockPatients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-secondary">Patient Management</h2>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search patients..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <button className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 text-secondary">
            <Filter size={20} />
          </button>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            <Plus size={20} />
            <span className="hidden sm:inline">Add Patient</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-card border border-gray-50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-gray uppercase">Patient Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-gray uppercase">ID / Phone</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-gray uppercase">Condition</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-gray uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-gray uppercase">Risk</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-text-gray uppercase">Last Visit</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-text-gray uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPatients.map((patient) => (
                <tr 
                  key={patient.id} 
                  onClick={() => navigate(`/dashboard/doctor/patients/${patient.id}`)}
                  className="hover:bg-gray-50 cursor-pointer transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                        {patient.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-secondary">{patient.name}</div>
                        <div className="text-xs text-text-gray">{patient.age} yrs • {patient.gender}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-secondary font-mono">#{patient.id.slice(0,6)}</div>
                    <div className="text-xs text-text-gray">{patient.phone}</div>
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
                      <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${patient.riskScore > 70 ? 'bg-red-500' : 'bg-primary'}`} 
                          style={{ width: `${patient.riskScore}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-secondary">{patient.riskScore}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-text-gray">
                    {new Date(patient.lastVisit).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-gray-200 rounded-full text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mock Add Patient Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <h3 className="text-xl font-bold text-secondary mb-4">Add New Patient</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-primary" />
              </div>
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 border border-gray-200 rounded-xl font-medium text-secondary hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary/90"
                >
                  Create Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientList;
