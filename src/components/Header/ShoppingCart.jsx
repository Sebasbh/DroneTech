import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

export function ShoppingCart() {
  return (
    <Link className='link' to={"/cart"}><h2><ShoppingCartSharpIcon  /></h2></Link>
  )
}
