import React from 'react';
import { Save, Tag } from 'lucide-react';

const NotesTab = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-50 h-[600px] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-secondary">Clinical Notes</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90">
          <Save size={16} />
          Save Note
        </button>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Note Title (e.g., Follow-up Consultation)" 
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary font-medium"
        />
        
        <textarea 
          className="flex-1 w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-primary resize-none leading-relaxed"
          placeholder="Start typing your clinical observations here..."
          defaultValue="Patient presents with mild fatigue and reported slight fever over the weekend. BP is stable. Recommended increasing fluid intake and prescribed basic antipyretics."
        ></textarea>

        <div className="flex items-center gap-2">
          <Tag size={16} className="text-gray-400" />
          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-secondary">Routine Checkup</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-secondary">Viral</span>
          <button className="text-xs text-primary font-medium hover:underline">+ Add Tag</button>
        </div>
      </div>
    </div>
  );
};

export default NotesTab;
