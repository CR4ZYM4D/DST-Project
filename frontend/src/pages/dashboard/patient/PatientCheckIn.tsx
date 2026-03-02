import React, { useState } from 'react';
import { Smile, Frown, Meh, Save } from 'lucide-react';

const PatientCheckIn = () => {
  const [mood, setMood] = useState('neutral');
  const [painLevel, setPainLevel] = useState(2);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-secondary">Daily Health Check-in</h2>
        <p className="text-text-gray mt-2">Help your doctor track your progress by logging your symptoms.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-50 space-y-8">
        {/* Mood Selection */}
        <div>
          <label className="block text-sm font-medium text-secondary mb-4">How are you feeling today?</label>
          <div className="flex justify-center gap-6">
            <button 
              onClick={() => setMood('good')}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 w-24 ${mood === 'good' ? 'border-green-500 bg-green-50' : 'border-gray-100 hover:border-gray-200'}`}
            >
              <Smile size={32} className={mood === 'good' ? 'text-green-500' : 'text-gray-400'} />
              <span className="text-xs font-medium">Good</span>
            </button>
            <button 
              onClick={() => setMood('neutral')}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 w-24 ${mood === 'neutral' ? 'border-yellow-500 bg-yellow-50' : 'border-gray-100 hover:border-gray-200'}`}
            >
              <Meh size={32} className={mood === 'neutral' ? 'text-yellow-500' : 'text-gray-400'} />
              <span className="text-xs font-medium">Okay</span>
            </button>
            <button 
              onClick={() => setMood('bad')}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 w-24 ${mood === 'bad' ? 'border-red-500 bg-red-50' : 'border-gray-100 hover:border-gray-200'}`}
            >
              <Frown size={32} className={mood === 'bad' ? 'text-red-500' : 'text-gray-400'} />
              <span className="text-xs font-medium">Bad</span>
            </button>
          </div>
        </div>

        {/* Pain Slider */}
        <div>
          <div className="flex justify-between mb-4">
            <label className="block text-sm font-medium text-secondary">Pain Level</label>
            <span className="text-sm font-bold text-primary">{painLevel}/10</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="10" 
            value={painLevel} 
            onChange={(e) => setPainLevel(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-2 text-xs text-text-gray">
            <span>No Pain</span>
            <span>Severe Pain</span>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">Additional Notes</label>
          <textarea 
            className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-primary h-32 resize-none"
            placeholder="Describe any specific symptoms..."
          ></textarea>
        </div>

        <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
          <Save size={20} />
          Submit Log
        </button>
      </div>
    </div>
  );
};

export default PatientCheckIn;
