import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Phone, MoreHorizontal } from 'lucide-react';
import { mockPatients } from '../../../services/mockData';
import OverviewTab from '../../../components/patient-tabs/OverviewTab';
import HistoryTab from '../../../components/patient-tabs/HistoryTab';
import VitalsTab from '../../../components/patient-tabs/VitalsTab';
import NotesTab from '../../../components/patient-tabs/NotesTab';
import ReportsTab from '../../../components/patient-tabs/ReportsTab'; // Import the new tab
import AIAnalysisPanel from '../../../components/dashboard/AIAnalysisPanel';

const PatientProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const patient = mockPatients.find(p => p.id === id) || mockPatients[0];
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'history', label: 'History' },
    { id: 'reports', label: 'Reports & Scans' }, // Added Reports Tab
    { id: 'ai', label: 'AI Analysis' },
    { id: 'vitals', label: 'Vitals' },
    { id: 'notes', label: 'Notes' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-2">
        <button onClick={() => navigate('/dashboard/doctor/patients')} className="p-2 hover:bg-gray-100 rounded-full text-secondary">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-secondary">{patient.name}</h2>
          <p className="text-sm text-text-gray">Patient ID: #{patient.id.slice(0, 8)}</p>
        </div>
        <div className="ml-auto flex gap-3">
          <button className="p-2 border border-gray-200 rounded-xl text-secondary hover:bg-gray-50">
            <Phone size={20} />
          </button>
          <button className="p-2 border border-gray-200 rounded-xl text-secondary hover:bg-gray-50">
            <MessageSquare size={20} />
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-xl font-medium text-sm">
            Actions
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100 inline-flex overflow-x-auto max-w-full">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id 
                ? 'bg-primary text-white shadow-md' 
                : 'text-secondary hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[500px]">
        {activeTab === 'overview' && <OverviewTab patient={patient} />}
        {activeTab === 'history' && <HistoryTab patient={patient} />}
        {activeTab === 'reports' && <ReportsTab patient={patient} />}
        {activeTab === 'ai' && <AIAnalysisPanel patient={patient} />}
        {activeTab === 'vitals' && <VitalsTab />}
        {activeTab === 'notes' && <NotesTab />}
      </div>
    </div>
  );
};

export default PatientProfile;
