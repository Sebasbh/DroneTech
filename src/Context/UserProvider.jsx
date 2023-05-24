import { createContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import { DronContext } from './AppContext';

// Dibujar los drones. Llamado a la "fake" API
 export const getDron = createContext();

 export  function UserProvider({children}) {
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios("data.json").then((res)=>setData(res.data))

    },[])


  return (
  <getDron.Provider value={{data, cart, setCart}}>{children}</getDron.Provider>
   
  )
}



