import { useContext } from "react";
import { getDron } from "../../Context/UserProvider"
import "./Header.css"



export const TotalCart = () => {
    const {cart} = useContext(getDron)
    const total = cart.reduce((acc, product)=>acc+product.price*product.quantity,0)


    return(
        <div className="buy-container">
        <div className="total-cart">Cantidad total: {total}€</div>
        <button className="buy-button">COMPRAR</button>
        </div>
    )
}
