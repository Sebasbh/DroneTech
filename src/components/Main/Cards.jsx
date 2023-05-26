import React, { useContext, useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import './Main.css';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {getDron} from '../../Context/UserProvider';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function Cards() {
  const {data}=useContext(getDron)
  //const [data, setData] = useState([]);
  const [cardStates, setCardStates] = useState({});

  /*useEffect(() => {
    axios
      .get('data.json')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);*/

  const handleExpandClick = (id) => {
    setCardStates({
      ...cardStates,
      [id]: {
        expanded: !cardStates[id]?.expanded,
      },
    });
  };

  return (
    <>
      {data.map((dron) => (
        <Card
          key={dron.id}
          sx={{
            maxWidth: 345,
            bgcolor: '#f8f9fa',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.8s ease-in-out',
            },
          }}
        >
          <CardHeader
          // Se envuelve el nombre del dron (dron.name) en un componente Typography y se le aplica el estilo fontWeight: 'bold' para hacerlo negrita.
            title={
              <Typography variant="h6" sx={{ fontWeight: '500' }}> 
                {dron.name}
              </Typography>
            }
            avatar={
              <Avatar sx={{ bgcolor: '#f8f9fa' }} aria-label="recipe">
                <img
                  src="/assets/Fotos/icon_dron.png"
                  alt="Logo"
                  style={{ width: '40px', height: 'auto', margin: 'auto' }}
                />
              </Avatar>
            }
            action={
              <IconButton caria-label="settings">
                <ShoppingCartCheckoutOutlinedIcon />
              </IconButton>
            }
          />
          <CardMedia component="img" height="194" image={dron.image} alt="dron.img" />
          <CardContent>
            {/*se envuelve el precio del dron (dron.price) en un componente Typography y se le aplica el estilo fontWeight: 'bold' para hacerlo negrita.  */}
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
              {dron.price}€
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>

            <ExpandMore
              expand={cardStates[dron.id]?.expanded}
              onClick={() => handleExpandClick(dron.id)}
              aria-expanded={cardStates[dron.id]?.expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={cardStates[dron.id]?.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph></Typography>
              <Typography paragraph>{dron.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </>
  );
}
