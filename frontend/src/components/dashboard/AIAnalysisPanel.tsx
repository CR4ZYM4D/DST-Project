import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, AlertTriangle, CheckCircle, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Patient, AIAnalysisResult } from '../../types';
import { generateAIAnalysis } from '../../services/mockData';

interface Props {
  patient: Patient;
}

const AIAnalysisPanel = ({ patient }: Props) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIAnalysisResult | null>(null);

  const handleRunAnalysis = async () => {
    setLoading(true);
    const data = await generateAIAnalysis(patient.condition);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-card border border-gray-50 p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg text-secondary flex items-center gap-2">
          <Brain className="text-primary" />
          Clinical Decision Support
        </h3>
        {result && (
          <span className="text-xs font-mono text-gray-400">
            Model: v2.4.1 (LIME/SHAP)
          </span>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        {!result && !loading && (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
              <Activity size={32} />
            </div>
            <div>
              <h4 className="font-medium text-secondary">Ready to Analyze</h4>
              <p className="text-sm text-text-gray max-w-xs mx-auto mt-2">
                Run deep learning inference on patient's recent vitals and history to detect anomalies.
              </p>
            </div>
            <button 
              onClick={handleRunAnalysis}
              className="bg-primary text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              <Brain size={18} />
              Run Diagnostics
            </button>
          </div>
        )}

        {loading && (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-secondary font-medium animate-pulse">Processing medical records...</p>
          </div>
        )}

        {result && !loading && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Verdict Card */}
            <div className={`p-4 rounded-xl border ${result.confidence > 0.8 ? 'bg-red-50 border-red-100' : 'bg-green-50 border-green-100'}`}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  {result.confidence > 0.8 ? <AlertTriangle className="text-red-600" size={20} /> : <CheckCircle className="text-green-600" size={20} />}
                  <span className={`font-bold ${result.confidence > 0.8 ? 'text-red-700' : 'text-green-700'}`}>
                    {result.disease} Detected
                  </span>
                </div>
                <span className="bg-white px-2 py-1 rounded text-xs font-bold shadow-sm">
                  {(result.confidence * 100).toFixed(1)}% Confidence
                </span>
              </div>
              <p className={`text-sm ${result.confidence > 0.8 ? 'text-red-600' : 'text-green-600'}`}>
                {result.recommendation}
              </p>
            </div>

            {/* Explainability Chart */}
            <div className="space-y-2">
              <h5 className="text-sm font-medium text-secondary flex items-center gap-2">
                <Activity size={14} />
                Feature Importance (SHAP Values)
              </h5>
              <div className="h-48 w-full bg-gray-50 rounded-xl p-2 border border-gray-100">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={result.features} layout="vertical" margin={{ left: 20 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 10}} />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="contribution" radius={[0, 4, 4, 0]} barSize={20}>
                      {result.features.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.contribution > 0 ? '#ef4444' : '#22c55e'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] text-text-gray italic">
                *Positive values (Red) push the model towards disease prediction, negative (Green) push away.
              </p>
            </div>

            {/* AI Summary */}
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <h5 className="text-sm font-medium text-blue-800 mb-2 flex items-center gap-2">
                <FileText size={14} />
                Generated Clinical Summary
              </h5>
              <p className="text-xs text-blue-900/80 leading-relaxed">
                {result.summary}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AIAnalysisPanel;
