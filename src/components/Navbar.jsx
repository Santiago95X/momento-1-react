import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Mi Marca de Sazón</h1>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0, padding: 0 }}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;
