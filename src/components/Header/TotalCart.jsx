import { useContext } from "react";
import { getDron } from "../../Context/UserProvider"


export const TotalCart = () => {
    const {cart} = useContext(getDron)
    const total = cart.reduce((acc, product)=>acc+product.price,0)

    return(
        <div className="total-cart">Cantidad total: {total}€</div>
    )
}
