import React from 'react';
import '../styles/Home.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Mi Marca de Sazón</h1>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;
