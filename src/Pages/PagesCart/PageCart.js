import { ShoppingCart } from "../../components/Header/ShoppingCart"
import { useContext } from "react"
import { getDron } from "../../Context/UserProvider"
import { TotalCart } from "../../components/Header/TotalCart"
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import "./PageCard.css"
import { ProductSlider } from "../../components/Header/ProductSlider"


export const PageCart = () => {
  const { cart, setCartQuantity } = useContext(getDron)
  setCartQuantity(cart.length)
  return cart.length > 0 ? (
    <div className="main-container">
      <div className="content">
        <Header />
        <ShoppingCart />
      </div>
      <div className="total-cart">
        <TotalCart />
      </div>
      <Footer className="footer" />

    </div>
  ) : (
    <div className="main-container">
      <Header />
      <div className="emptycart"><h2>Tu carrito está vacío</h2></div>
      <ProductSlider />
      <div class="slider-container">
        <div class="slider">
          <div class="slide">¡Descubre nuestros drones de alta calidad!</div>
          <div class="slide">¡Descubre nuestros drones de alta calidad!</div>
          <div class="slide">¡Descubre nuestros drones de alta calidad!</div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};