import React from 'react';
import { Link } from 'react-router-dom';

const NavbarHokage = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">Chūnin Network</div>
        <div>
          <Link to="/missions" className="text-white px-4">Missions</Link>
          <Link to="/trainings" className="text-white px-4">Entraînements</Link>
          <Link to="/manage-users" className="text-white px-4">Gérer Utilisateurs</Link>
          <Link to="/manage-missions" className="text-white px-4">Gérer Missions</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHokage;
