import React, { useContext } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { getDron } from '../../Context/UserProvider';
import "./ProductDetails.css"
//import { SettingsCellSharp } from '@mui/icons-material';



export function ProductDetails() {
    const { id } = useParams();
    const { data, buyProducts, setCartQuantity, cart } = useContext(getDron);

    // Filtrar el producto correspondiente según su id
    const dron = data.find(item => item.id === parseInt(id));
    setCartQuantity(cart.length)
    return (
        <>
          <Header />
       
          <div className="container-details">
            {/* Mostrar los detalles del producto */}
            {dron && (
              <>
                <div className="container-name">
                  <h3>{dron.name}</h3>
                  <img src={dron.image} alt={dron.name} />
                </div>
                <div className="container-description">
                  <p className='description'>{dron.description}</p><br/>
                  <p>{dron.price}€</p><br/>
                  <button onClick={() => buyProducts(dron)}>Comprar</button>
                </div>
              </>
            )}
          </div>
          <Footer className='footer-detail'/>
        </>
      );
}   
