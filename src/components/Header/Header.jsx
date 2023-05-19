import React from 'react'
import "./Header.css"
import { ShoppingCart } from './ShoppingCart'
import { Search } from './Search'

export function Header() {
  return (
    <header className='header'>
        <h1>header</h1>
        <ShoppingCart/>
        <Search/>
    </header>
  )
}

