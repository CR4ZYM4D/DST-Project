import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onSearch: (name: string, speciality: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const [searchName, setSearchName] = useState('');
  const [searchSpeciality, setSearchSpeciality] = useState('');

  const handleSearch = () => {
    onSearch(searchName, searchSpeciality);
    // Scroll to doctors section smoothly
    document.getElementById('doctors-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full px-4 md:px-12 pt-8 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
              We care <br />
              <span className="text-secondary">about your health</span>
            </h1>
            <p className="text-text-gray mt-6 max-w-md leading-relaxed">
              Good health is the state of mental, physical and social well being and it does not just mean absence of diseases.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-secondary font-medium"
          >
            Become member of our hospital community? <span className="text-primary cursor-pointer" onClick={() => document.getElementById('doctors-section')?.scrollIntoView({ behavior: 'smooth' })}>Book Appointment</span>
          </motion.div>

          {/* Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-4 rounded-3xl shadow-card max-w-2xl mt-8 flex flex-col md:flex-row gap-4 items-center border border-gray-100"
          >
            <div className="flex-1 w-full">
                <label className="block text-xs text-text-gray ml-4 mb-1">Find a doctor</label>
                <input 
                  type="text"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  placeholder="Name of Doctor"
                  className="bg-light-gray rounded-xl px-4 py-3 text-sm text-secondary w-full outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
            </div>
            <div className="flex-1 w-full">
                <label className="block text-xs text-text-gray ml-4 mb-1 opacity-100">Speciality</label>
                <input 
                  type="text"
                  value={searchSpeciality}
                  onChange={(e) => setSearchSpeciality(e.target.value)}
                  placeholder="e.g. Cardiologist"
                  className="bg-light-gray rounded-xl px-4 py-3 text-sm text-secondary w-full outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
            </div>
            <button 
              onClick={handleSearch}
              className="bg-primary text-white px-8 py-3 rounded-2xl font-medium w-full md:w-auto mt-5 md:mt-0 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
                Search
            </button>
          </motion.div>
        </div>

        {/* Right Content - Images */}
        <div className="relative h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-primary rounded-full opacity-5 scale-90"></div>
            <div className="absolute inset-0 bg-primary rounded-full opacity-10 scale-75"></div>
            
            {/* Main Circle Image Container */}
            <div className="relative w-[450px] h-[450px] bg-primary rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
                <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" 
                    alt="Doctor" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Floating Cards */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-20 left-0 bg-white/80 backdrop-blur-md p-4 rounded-3xl shadow-glass border border-white z-20 flex items-center gap-3 max-w-[220px]"
            >
                <div className="bg-white p-2 rounded-full shadow-sm">
                    <ShieldCheck className="text-primary" size={24} />
                </div>
                <div>
                    <h4 className="font-semibold text-secondary text-sm">Well Qualified doctors</h4>
                    <p className="text-xs text-text-gray">Treat with care</p>
                </div>
            </motion.div>

            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-40 -right-4 bg-white/60 backdrop-blur-md p-4 rounded-3xl shadow-glass border border-white z-20 flex items-center gap-3"
            >
                <div className="bg-primary p-2 rounded-full shadow-sm text-white">
                    <Phone size={20} />
                </div>
                <div>
                    <h4 className="font-semibold text-secondary text-sm">Contact no</h4>
                    <p className="text-xs text-secondary font-bold">+91 123 456 7890</p>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
