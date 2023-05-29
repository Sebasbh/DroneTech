import React, { useState, useEffect } from 'react';
import { Favorite } from '@mui/icons-material';

export function FavoriteIconCard({ id }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const handleClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      const index = favorites.indexOf(id);
      if (index !== -1) {
        favorites.splice(index, 1);
      }
    } else {
      favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <Favorite
      className={`FavoriteIcon ${isFavorite ? 'favorite' : ''}`}
      onClick={handleClick}
    />
  );
}
