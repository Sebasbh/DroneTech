import React, { useContext, useEffect, useState } from 'react';
import { getDron } from '../../Context/UserProvider';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './Main.css'; // Importar archivo CSS para los estilos personalizados
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export function FavoriteContainer() {
  const { data } = useContext(getDron);
  const [favoriteDrones, setFavoriteDrones] = useState([]);

  useEffect(() => {
    const storedIds = localStorage.getItem('favorites');
    if (storedIds) {
      const parsedIds = JSON.parse(storedIds);

      // Buscar los drones correspondientes a los IDs almacenados en el contexto
      const filteredDrones = data.filter(drone => parsedIds.includes(drone.id));
      setFavoriteDrones(filteredDrones);
    }
  }, [data]);

  const handleDelete = (id) => {
    // Eliminar el producto con el ID proporcionado de la lista de drones favoritos
    const updatedDrones = favoriteDrones.filter(drone => drone.id !== id);
    setFavoriteDrones(updatedDrones);

    // Actualizar el localStorage eliminando el ID del producto
    const storedIds = localStorage.getItem('favorites');
    if (storedIds) {
      const parsedIds = JSON.parse(storedIds);
      const updatedIds = parsedIds.filter(itemId => itemId !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedIds));
    }
  };

  return (
    <div className="favorite-container">
      <h1 className="centered-heading">Mis Drones Favoritos</h1>
      {favoriteDrones.length === 0 ? (
        <div className="emptyfavorites">
          <h2>No has añadido ningún producto a favoritos</h2>
        </div>
      ) : (
        <ul>
          {favoriteDrones.map(drone => (
            <li key={drone.id} className="favorite-drone">
              <div className="image-container">
                <img src={drone.image} alt={drone.name} />
              </div>
              <div className="drone-details">
              <h3 style={{ fontSize: '25px' }}>{drone.name}</h3>
              <p style={{ marginTop: '10px'}}>{drone.description}</p>
              <p style={{ marginTop: '5px' }}><strong>Tipo:</strong> {drone.type}</p>
              <p style={{ marginTop: 'px' }}><strong>Precio:</strong>{drone.price}€</p>
                {/* Resto de las propiedades a mostrar */}
              </div>
              <div className="delete-button">
                <IconButton
                  aria-label="Eliminar"
                  onClick={() => handleDelete(drone.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  aria-label="Carrito"
                  onClick={() => handleDelete(drone.id)}
                >
                  < ShoppingCartIcon />
                </IconButton>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}




