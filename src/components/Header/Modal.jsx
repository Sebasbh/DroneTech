import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><SearchIcon /></Button>
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
            <input type="text" placeholder="Nombre del dron" style={{ marginLeft: '8px', width: '100%', padding: '8px', fontSize: '16px' }} />
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luc
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
