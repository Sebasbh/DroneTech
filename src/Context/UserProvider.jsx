import { createContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


// Dibujar los drones. Llamado a la "fake" API
export const getDron = createContext();

export function UserProvider({ children }) {
  const [data, setData] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const cartLS = JSON.parse(localStorage.getItem('cart'))??[]
  const [cart, setCart] = useState(cartLS);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data))
  }, [])



 // ------------- FUNCIÓN SUMAR +1 PRODUCTO. REUTILIZABLE -------------------

  const buyProducts = (dron) => {
    const productrepeat = cart.find((item) => item.id === dron.id)
    if (productrepeat) {
      setCart(cart.map((item) => (item.id === dron.id ? { ...dron, quantity:productrepeat.quantity + 1 } : item)));
    } else {
      setCart([...cart, dron])
    }

  };


// -------------- LOCAL STORAGE ------------------

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])    
  
  
  
  // ------------- FUNCIÓN RESTAR -1 PRODUCTO. REUTILIZABLE -------------------

  const restProducts=(dron)=>{
    const productrepeat =cart.find((item)=>item.id===dron.id) 
    productrepeat.quantity !== 1 && setCart(cart.map((item)=>(item.id===dron.id ?{...dron,quantity:productrepeat.quantity -1}: item)))
    }

 
  // // ------------- FUNCIÓN ELIMINAR PRODUCTO DEL CARRITO. REUTILIZABLE -------------------  

  const deleteProduct= (id)=>{
    const foundId = cart.find((element)=>element.id===id)
    const newCart = cart.filter((element)=>{
      return element !== foundId
    })
    setCart(newCart)
     }




  return (
    <getDron.Provider value={{ data, cart, setCart, cartQuantity, setCartQuantity, buyProducts, restProducts, deleteProduct }}>{children}</getDron.Provider>

  )
}
