import { createContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import { DronContext } from './AppContext';

// Dibujar los drones. Llamado a la "fake" API
 export const getDron = createContext();

 export  function UserProvider({children}) {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        axios("data.json").then((res)=>setData(res.data))

    },[])
    //const updatedata= (newdata)=>{setData(newdata)}

  return (
  <getDron.Provider value={{data, setData}}>{children}</getDron.Provider>
  
  )
}

