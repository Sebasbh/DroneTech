import React from 'react'
import { Link } from 'react-router-dom'
export function ShoppingCart() {
  return (
    <Link to={"/cart"}><h2>🛒</h2></Link>
  )
}
