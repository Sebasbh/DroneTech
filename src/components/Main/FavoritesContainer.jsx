import { getDron } from '../../Context/UserProvider';
import { useContext } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Main.css'
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';
export const FavoriteContainer = () => {

  const { heart, deleteHeart,setHeartQuantity,cart,setCartQuantity, buyProducts} = useContext(getDron)

 


  setHeartQuantity(heart.length)
  setCartQuantity(cart.length)
  return heart.map((dron) => {


    return (
     
           <div className="favoritecontainer">
           

                <img className='image-favorites' src={dron.image} alt={dron.name}  />
              
              <div className="drone-details">
                <h3 style={{ fontSize: '25px' }}>{dron.name}</h3><br/>
                <p style={{ marginTop: '10px'}}>{dron.description}</p><br/>
                <p style={{ marginTop: '5px' }}><strong>Tipo:</strong> {dron.type}</p><br/>
                <p style={{ marginTop: 'px' }}><strong>Precio/U:</strong>{dron.price}€</p>
                </div>
              <div className='favoritesicons'>
              <IconButton >
              <FavoriteIcon onClick={()=>deleteHeart(dron.id)} className="FavoriteIcon"/>
              </IconButton>
              <IconButton aria-label="Carrito" >
              <Link to='/cart' className="link-style">
                  <AddShoppingCartIcon onClick={() => buyProducts(dron)} />
              </Link>
             </IconButton>
              </div>
              
      </div>
    )


  })



}



