import React from 'react';
import '../styles/Home.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <span className="logo-icon">🌿</span>
        <h1 className="logo">Sazón Natural</h1>
      </div>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;
