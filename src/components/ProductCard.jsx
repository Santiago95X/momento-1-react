import React from 'react';

function ProductCard({ data }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px', width: '200px', backgroundColor: '#fff' }}>
      <h3 style={{ marginTop: 0 }}>{data.nombre}</h3>
      <p style={{ color: '#666' }}>Precio: ${data.precio}</p>
      <button style={{ padding: '0.5rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Comprar
      </button>
    </div>
  );
}

export default ProductCard;
