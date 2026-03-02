import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full py-6 px-4 md:px-12 flex justify-between items-center bg-white sticky top-0 z-50 shadow-sm md:shadow-none">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
        <div className="text-primary font-bold text-2xl">Hospital</div>
        <div className="text-secondary text-2xl">logo</div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-secondary font-medium">
        <Link to="/" className="text-primary">Home</Link>
        <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
        <Link to="/doctors" className="hover:text-primary transition-colors">Doctors</Link>
        <Link to="/about" className="hover:text-primary transition-colors">About us</Link>
        <Link to="/contact" className="hover:text-primary transition-colors">Contact us</Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/dashboard')}
          className="text-secondary font-medium px-4 py-2"
        >
          Sign in
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-primary text-primary font-medium px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
        >
          Sign up
        </motion.button>
      </div>
      
      {/* Mobile Menu Button Placeholder */}
      <div className="md:hidden text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
