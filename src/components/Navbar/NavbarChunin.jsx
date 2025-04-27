import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img 
          src="/logo-naruto.png" 
          alt="Chunin Network Logo" 
          className="w-10 h-10 rounded-full"
        />
        <span className="text-2xl font-bold text-gray-800">Chūnin <span className="text-red-600">Network</span></span>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#missions" className="text-gray-600 hover:text-red-600 font-semibold transition">Missions</a>
        <a href="#trainings" className="text-gray-600 hover:text-red-600 font-semibold transition">Entraînement</a>
        <a href="#village" className="text-gray-600 hover:text-red-600 font-semibold transition">Village</a>
      </div>

      {/* Bouton Connexion */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
      >
        Connexion
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
