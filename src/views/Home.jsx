import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

const Home = () => {
  const [listaSazon, setListaSazon] = useState([
    { id: 1, nombre: 'Sazón Premium', precio: 10 },
    { id: 2, nombre: 'Especias Mix', precio: 15 },
    { id: 3, nombre: 'Adobo Especial', precio: 8 },
    { id: 4, nombre: 'Sal Marina', precio: 5 },
  ]);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <h2 className="section-title">Nuestros Productos</h2>
        <div className="products-grid">
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
