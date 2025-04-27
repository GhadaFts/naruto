import React from 'react';
import { Link } from 'react-router-dom';
export default function HokageNavbar() {
  return (
    <nav className="bg-white shadow py-3 px-6 flex justify-between items-center fixed w-full z-10">
      <Link to="/hokage/dashboard" className="text-xl font-bold text-gray-800">Chūnin Network</Link>
      <div className="space-x-4">
        <Link to="/hokage/dashboard" className="text-gray-600 hover:text-red-600">Vue d'ensemble</Link>
        <Link to="/hokage/announce" className="text-gray-600 hover:text-red-600">Annonces</Link>
        <Link to="/" onClick={() => { localStorage.clear(); }} className="text-red-600 font-semibold">Logout</Link>
      </div>
    </nav>
  );
}