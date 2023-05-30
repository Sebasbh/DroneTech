import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [modalData, setModalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [highlightedItem, setHighlightedItem] = useState(null);

  const handleClose = () => setOpen(false);

  const handleMouseEnter = (event, index) => {
    setHighlightedItem(index);
  };

  const handleMouseLeave = () => {
    setHighlightedItem(null);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchText(query);

    if (query.trim() === '') {
      setFilteredData([]);
    } else {
      const filteredResults = modalData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filteredResults);
    }
  };

  useEffect(() => {
    // Fetching data from the external API
    fetch('http://localhost:3500/drones')
      .then((response) => response.json())
      .then((data) => {
        console.log('API response:', data); // Verificar los datos recibidos en la consola
        setModalData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <SearchIcon onClick={() => setOpen(true)} style={{ padding: 0, background:'transparent'}} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Busca tu Dron</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Nombre del dron"
              style={{
                marginLeft: '8px',
                width: '100%',
                padding: '8px',
                fontSize: '16px',
                color: 'black',
              }}
              value={searchText}
              onChange={handleSearchInputChange}
            />
          </div>
          {filteredData.length === 0 ? (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              No se encontraron resultados
            </Typography>
          ) : null}
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                mt: 2,
                backgroundColor: highlightedItem === index ? '#FF4400' : 'transparent',
                color: highlightedItem === index ? '#FFF' : 'inherit',
              }}
              onMouseEnter={(event) => handleMouseEnter(event, index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '50px', marginRight: '8px' }}
              />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link
                  to={`/detail/${item.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography id="modal-modal-description">{item.name}</Typography>
                </Link>
                <Link to={`/detail/${item.id}`}>
                  <IconButton size="small">
                    <ChevronRightIcon />
                  </IconButton>
                </Link>
              </div>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
