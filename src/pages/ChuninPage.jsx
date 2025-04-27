import React from 'react';
import { motion } from 'framer-motion';

const ChuninPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Section Missions */}
      <div className="py-12 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-8" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Missions pour Chūnin
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">Mission 1: Surveillance</h3>
              <p className="mt-2 text-gray-600">Surveillez les zones sensibles du village et rapportez toute activité suspecte.</p>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition">
                Accepter Mission
              </button>
            </motion.div>

            {/* Mission 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">Mission 2: Patrouille</h3>
              <p className="mt-2 text-gray-600">Effectuer une patrouille autour du village pour détecter toute menace potentielle.</p>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition">
                Accepter Mission
              </button>
            </motion.div>

            {/* Mission 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">Mission 3: Recherche</h3>
              <p className="mt-2 text-gray-600">Participez à une mission de recherche pour localiser des artefacts perdus du village.</p>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition">
                Accepter Mission
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section Entraînements */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-8 text-gray-800" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Entraînements pour Chūnin
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Entraînement 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">Entraînement 1: Techniques de Ninjutsu</h3>
              <p className="mt-2 text-gray-600">Améliorez vos compétences en Ninjutsu avec un entraînement intensif.</p>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition">
                Commencer Entraînement
              </button>
            </motion.div>

            {/* Entraînement 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">Entraînement 2: Combat au corps à corps</h3>
              <p className="mt-2 text-gray-600">Améliorez vos compétences en combat rapproché pour devenir plus agile.</p>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition">
                Commencer Entraînement
              </button>
            </motion.div>

            {/* Entraînement 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">Entraînement 3: Stratégie de mission</h3>
              <p className="mt-2 text-gray-600">Apprenez à planifier et à exécuter des missions de manière stratégique.</p>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition">
                Commencer Entraînement
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section Profil Chūnin */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-8 text-gray-800" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Profil de Chūnin
          </motion.h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-6">
              <div>
                <img 
                  src="https://www.example.com/path-to-chunin-avatar.jpg" 
                  alt="Chūnin Avatar" 
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Nom: Naruto Uzumaki</h3>
                <p className="mt-2 text-gray-600">Rang: Chūnin</p>
                <p className="mt-2 text-gray-600">Village: Konoha</p>
                <p className="mt-4 text-gray-700">Progression: Vous avez complété 3 missions sur 5 et terminé 2 entraînements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChuninPage;
