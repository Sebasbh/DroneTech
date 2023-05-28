import React from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import './PagesFavorites.css'
import { FavoriteContainer } from '../../components/Main/FavoritesContainer'

export function Favorites() {
  return (
    <>
    <Header/>
    <FavoriteContainer/>
    <Footer/>
    </>
  )
  }