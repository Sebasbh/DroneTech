// import React from 'react'
// import { Link } from 'react-router-dom'
// import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
// import { useContext } from 'react';
// import { getDron } from '../../Context/UserProvider';
// import { dividerClasses } from '@mui/material';
// import "./Header.css"





// export const ShoppingCart = () => {
//   const {cart,cartQuantity,setCartQuantity}= useContext(getDron);
//   return cart.map((dron) => (
//     <div className='main-products-cart' key={dron.id}>
//       <div className='column'>
//         <span className='column-title'>Modelo:</span>
//         <h3>{dron.name}</h3>
//       </div>
//       <div className='column'>
//         <span className='column-title'></span>
//         <img src={dron.image} alt='imagen' />
//       </div>
//       <div className='column'>
//         <span className='column-title'>Descripción:</span>
//         <h5>{dron.description}</h5>
//       </div>
//       <div className='column'>
//         <span className='column-title'>Precio:</span>
//         <p>{dron.price}€</p>
//       </div>
//     </div>
//   ));
// };


import React from 'react'
import { useContext } from 'react';
import { getDron } from '../../Context/UserProvider';
import "./Header.css"
import { ShoppingCartContents } from './ShoppingCartContents';



export const ShoppingCart = () => {

  const { cart, buyProducts, restProducts, deleteProduct } = useContext(getDron)
  return cart.map((dron) => {

    return (
      <>

        <div className='main-products-cart' key={dron.id}>
          <div className='column'>
            <span className='column-title'>Modelo</span>
            <h3>{dron.name}</h3>
          </div>

          <div className='product'>          
            <span className='column-title'></span>
            <img src={dron.image} alt='imagen' />        
          </div>

          <div className='column-quantity'>
            <span className='column-title'>Cantidad</span>
            <div className='flex-quantity'>
            <button onClick={() =>restProducts(dron)}>-</button>
              <ShoppingCartContents dron={dron} quantity={dron.quantity} />
              <button onClick={() =>buyProducts(dron)}>+</button>
            </div>
          </div>

          <div className='column-price'>
            <span className='column-title'>Precio/U</span>
            <p>{dron.price}€ <span><button className='delete-button' onClick={()=>deleteProduct(dron.id)}>Eliminar</button></span></p>
          </div>
        </div>
      </>
    )


  })


}





