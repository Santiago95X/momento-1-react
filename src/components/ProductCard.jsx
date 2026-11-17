import React from 'react';
import '../styles/Home.css';

function ProductCard({ data }) {
  return (
    <div className="product-card">
      <h3 className="product-title">{data.nombre}</h3>
      <p className="product-price">${data.precio}</p>
      <button className="btn-comprar">Añadir al carrito</button>
    </div>
  );
}

export default ProductCard;
