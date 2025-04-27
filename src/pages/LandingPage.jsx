import React from 'react';
import { motion } from 'framer-motion';
import { FaTasks, FaChalkboardTeacher, FaRegUser } from 'react-icons/fa'; // Icônes de React Icons

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen flex flex-col font-sans pt-24">
      
      {/* Section Hero */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto px-6 py-12">
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight mb-6">
            Bienvenue au <span className="text-red-600">Chūnin Network</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Une plateforme pour tous : <span className="font-bold">Chūnin</span> (étudiants), <span className="font-bold">Jōnin</span> (enseignants), et <span className="font-bold">Hokage</span> (administrateurs).
          </p>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition"
          >
            Rejoindre le Village
          </motion.button>
        </motion.div>

        <motion.div 
          className="md:w-1/2 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.img 
            src="/naruto.jpg" 
            alt="Mont Hokage" 
            className="w-96 h-auto rounded-lg shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </section>

      {/* Section Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
            Fonctionnalités principales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Missions */}
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl text-red-600 mb-4">
                <FaTasks />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Missions</h3>
              <p className="text-gray-600">
                Attribuées par les Jōnin, terminées par les Chūnin. Gagnez des récompenses pour votre équipe !
              </p>
            </motion.div>

            {/* Entraînement */}
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl text-red-600 mb-4">
                <FaChalkboardTeacher />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Entraînement IA</h3>
              <p className="text-gray-600">
                Utilisez la vision par ordinateur pour maîtriser vos techniques de jutsus.
              </p>
            </motion.div>

            {/* Gestion du Village */}
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl text-red-600 mb-4">
                <FaRegUser />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Gestion Village</h3>
              <p className="text-gray-600">
                Les Hokage gèrent les membres, surveillent les missions, et assurent la prospérité du village.
              </p>
            </motion.div>

          </div>
        </div>

      </section>
      
    </div>
  );
};

export default LandingPage;
