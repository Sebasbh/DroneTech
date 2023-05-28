import React, { useState, useEffect } from 'react';

export function FavoriteCount() {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const updateProductCount = () => {
      const storedIds = JSON.parse(localStorage.getItem('favorites')) || [];
      const count = storedIds.length;
      setProductCount(count);
    };

    updateProductCount(); // Actualizar la cantidad inicial

    // Suscribirse a los eventos de almacenamiento para actualizar la cantidad cuando cambie
    window.addEventListener('storage', updateProductCount);

    // Eliminar el evento de almacenamiento al desmontar el componente
    return () => {
      window.removeEventListener('storage', updateProductCount);
    };
  }, []);

  return <span className="product-count">{productCount}</span>;
}
