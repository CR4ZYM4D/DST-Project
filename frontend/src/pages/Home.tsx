import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Doctors from '../components/Doctors';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  const [doctorSearch, setDoctorSearch] = useState('');
  const [specialitySearch, setSpecialitySearch] = useState('');

  const handleSearch = (name: string, speciality: string) => {
    setDoctorSearch(name);
    setSpecialitySearch(speciality);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero onSearch={handleSearch} />
      <Doctors searchQuery={doctorSearch} specialityQuery={specialitySearch} />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
