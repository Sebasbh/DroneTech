import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '@fontsource/roboto/500.css';
import "./Menu.css";

function MenuDropdown({ anchorEl, handleClose }) {
  return (
    <Menu
      sx={{
        maxWidth: 345,
        fontWeight: '500',
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'transform 0.8s ease-in-out',
        },
      }}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {/* Agrega aquí los elementos del menú */}
      <MenuItem onClick={handleClose}>
        <Link to="/" className="menuLink">
          Inicio
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="" className="menuLink">
          Perfil
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/Favorites/" className="menuLink">
          Favorites
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/cart/" className="menuLink">
          Carrito
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/contacto/" className="menuLink">
          Contacto
        </Link>
      </MenuItem>
    </Menu>
  );  

}


export default MenuDropdown;



