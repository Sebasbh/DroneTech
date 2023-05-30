import React,{ useContext} from 'react'
import { Header  } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import './PagesFavorites.css'
import { FavoriteContainer } from '../../components/Main/FavoritesContainer'
import { getDron } from '../../Context/UserProvider'
import { Link } from 'react-router-dom'

export function Favorites() {
  const {heart, setHeartQuantity}=useContext(getDron)
  setHeartQuantity(heart.length)
  return heart.length > 0 ?(
    <div className="main-container">
      <div className="main-favorites">
        <Header />
        <FavoriteContainer />
        <Link to= '/'>
          <div className="boton">
            <button className="add-favorites1">Añade más favoritos</button>
          </div>
        </Link>
        </div>
        <Footer className="footer-favorites" />
    </div>

  ):(
    <div className="main-container">
    <Header />
    <div className="emptyfavorites">
      <h2>¡Crea tu lista con todos tus productos favoritos!</h2>
      <Link to= '/'>
        <button className='add-favorites2'>Añade tus productos</button>
      </Link>
      </div>
        
    <Footer className="footer-favorites"/>
  </div>
  )
  }
