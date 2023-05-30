import React from 'react'
import { Favorite } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export function FavoriteIconHeader() {

  return (
    <Link to='/favorites/' className='FavoritesIconHeader'>
        <Favorite className='FavoriteIconHeader'/>
    </Link>
  )
}

