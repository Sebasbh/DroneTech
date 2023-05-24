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
        <Link to="/HomePage/" className="menuLink">
          Home Page
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/ProductDetails/" className="menuLink">
          Product Detail
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/Pages/" className="menuLink">
          Pages Cart
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/search/" className="menuLink">
          Search
        </Link>
      </MenuItem>
    </Menu>
  );
}

export default MenuDropdown;



