import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { useContext } from 'react';
import { getDron } from '../../Context/UserProvider';
import { dividerClasses } from '@mui/material';



export const ShoppingCart= () => {
  const {cart}= useContext(getDron)
  return cart.map((dron)=>{
    return (
      <div key={dron.id}>
        <h3>{dron.name}</h3>
        <img src={dron.image} alt="imagen"/>
        <h5>{dron.description}</h5>
        <p>{dron.price}</p>
      </div>
    )
  
  })

  // return (
  //   <Link className='link' to={"/cart"}><h2><ShoppingCartSharpIcon  /></h2></Link>
  // )
}
