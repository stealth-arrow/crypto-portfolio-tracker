// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="text-white font-bold">Crypto Portfolio Tracker</div>
      </div>
    </nav>
  );
};

export default Navbar;
