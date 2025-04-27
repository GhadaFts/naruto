import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white relative overflow-hidden font-sans">
      
      {/* Image de fond animée */}
      <motion.img 
        src="/ton-image-fond.png" // <<< Remplace ici
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Contenu de la page */}
      <motion.div 
        className="z-10 bg-white bg-opacity-90 p-10 rounded-lg shadow-2xl w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
          Connexion au Village
        </h1>

        <form className="space-y-6">
          {/* Email */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
              <FaUser />
            </span>
            <input 
              type="email" 
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
              <FaLock />
            </span>
            <input 
              type="password" 
              placeholder="Mot de passe"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Bouton */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Se Connecter
          </motion.button>
        </form>

        {/* Lien vers Inscription */}
        <p className="text-center text-gray-600 mt-6">
          Pas encore de compte ? <a href="/register" className="text-red-600 font-semibold hover:underline">Inscrivez-vous</a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
