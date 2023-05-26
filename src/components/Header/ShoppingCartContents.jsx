import { useContext } from 'react';
import { getDron } from '../../Context/UserProvider';


export const ShoppingCartContents =({quantity})=> {
  
  
  return (
        <>
             
             <p>{quantity}</p>
             
         </>
  )
}