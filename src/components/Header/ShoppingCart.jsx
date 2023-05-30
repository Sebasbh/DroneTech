import React from 'react'
import { useContext } from 'react';
import { getDron } from '../../Context/UserProvider';
import "./Header.css"


export const ShoppingCart = ({quantity}) => {

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
            {quantity}{dron.quantity}
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





