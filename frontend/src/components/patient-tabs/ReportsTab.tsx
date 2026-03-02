import React, { useState } from 'react';
import { Upload, FileText, Image as ImageIcon, X, Eye, Trash2, File, CheckCircle } from 'lucide-react';
import { Patient, MedicalRecord } from '../../types';

interface ReportsTabProps {
  patient: Patient;
}

const ReportsTab = ({ patient }: ReportsTabProps) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  
  // Mock local state for reports to simulate adding new ones
  const [reports, setReports] = useState<MedicalRecord[]>(patient.history.filter(h => ['Report', 'Scan', 'Lab'].includes(h.type)));

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // In a real app, handle files here: e.dataTransfer.files
  };

  const simulateUpload = () => {
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
            setIsUploadModalOpen(false);
            setUploadProgress(0);
            // Add mock report
            const newReport: MedicalRecord = {
                id: Date.now().toString(),
                date: new Date().toISOString(),
                type: 'Scan',
                title: 'Blood Smear Microscopy',
                summary: 'Uploaded for AI Leukemia detection.',
                doctorName: 'Dr. Robert Henry',
                fileUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop'
            };
            setReports([newReport, ...reports]);
        }, 500);
      }
    }, 200);
  };

  return (
    <div className="space-y-6">
      {/* Header & Actions */}
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-card border border-gray-50">
        <div>
            <h3 className="font-semibold text-lg text-secondary">Medical Reports & Scans</h3>
            <p className="text-sm text-text-gray">Manage patient documents, lab results, and imaging.</p>
        </div>
        <button 
            onClick={() => setIsUploadModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
        >
            <Upload size={20} />
            Upload Report
        </button>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
            <div key={report.id} className="bg-white p-4 rounded-2xl shadow-card border border-gray-50 group hover:shadow-lg transition-all">
                <div className="h-40 bg-gray-100 rounded-xl mb-4 overflow-hidden relative flex items-center justify-center">
                    {report.type === 'Scan' || report.title.includes('Smear') ? (
                        <img 
                            src={report.fileUrl || "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop"} 
                            alt="Report Preview" 
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <FileText size={48} className="text-gray-300" />
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button className="p-2 bg-white rounded-full text-secondary hover:text-primary">
                            <Eye size={20} />
                        </button>
                        <button className="p-2 bg-white rounded-full text-red-500 hover:bg-red-50">
                            <Trash2 size={20} />
                        </button>
                    </div>
                </div>
                
                <div className="flex justify-between items-start">
                    <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md mb-2 inline-block ${
                            report.type === 'Scan' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'
                        }`}>
                            {report.type}
                        </span>
                        <h4 className="font-medium text-secondary line-clamp-1">{report.title}</h4>
                        <p className="text-xs text-text-gray mt-1">{new Date(report.date).toLocaleDateString()} • {report.doctorName}</p>
                    </div>
                </div>
            </div>
        ))}

        {/* Empty State if no reports */}
        {reports.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-400">
                <FileText size={48} className="mx-auto mb-4 opacity-20" />
                <p>No reports uploaded yet.</p>
            </div>
        )}
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-xl text-secondary">Upload Medical Report</h3>
                    <button onClick={() => setIsUploadModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>
                
                <div className="p-8">
                    {/* Drag Drop Zone */}
                    <div 
                        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors mb-6 ${
                            dragActive ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'
                        }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Upload size={32} />
                        </div>
                        <p className="text-secondary font-medium mb-1">Click to upload or drag and drop</p>
                        <p className="text-xs text-text-gray mb-4">SVG, PNG, JPG or PDF (max. 10MB)</p>
                        <p className="text-xs text-primary font-medium bg-primary/10 inline-block px-3 py-1 rounded-full">
                            Optimized for Blood Smear Images
                        </p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-1">Report Title</label>
                            <input type="text" placeholder="e.g. Blood Smear Sample #402" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-primary text-sm" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-secondary mb-1">Type</label>
                                <select className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-primary text-sm bg-white">
                                    <option>Microscopy Scan</option>
                                    <option>Lab Report</option>
                                    <option>X-Ray / MRI</option>
                                    <option>Prescription</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary mb-1">Date</label>
                                <input type="date" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-primary text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar (Visible during upload) */}
                    {uploadProgress > 0 && (
                        <div className="mt-6">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-secondary font-medium">Uploading...</span>
                                <span className="text-primary font-bold">{uploadProgress}%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                <div className="bg-primary h-full transition-all duration-200" style={{ width: `${uploadProgress}%` }}></div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-6 border-t border-gray-100 flex gap-3 bg-gray-50">
                    <button 
                        onClick={() => setIsUploadModalOpen(false)}
                        className="flex-1 py-3 border border-gray-200 rounded-xl font-medium text-secondary hover:bg-white transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={simulateUpload}
                        disabled={uploadProgress > 0}
                        className="flex-1 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {uploadProgress === 100 ? <CheckCircle size={20} /> : 'Upload File'}
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ReportsTab;
