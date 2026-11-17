import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [listaSazon, setListaSazon] = useState([
    { id: 1, nombre: 'Sazón Premium', precio: 10 },
    { id: 2, nombre: 'Especias Mix', precio: 15 },
    { id: 3, nombre: 'Adobo Especial', precio: 8 },
    { id: 4, nombre: 'Sal Marina', precio: 5 },
  ]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
      <Navbar />
      <main style={{ padding: '2rem', flex: 1, textAlign: 'center' }}>
        <h2>Nuestros Productos</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {listaSazon.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
