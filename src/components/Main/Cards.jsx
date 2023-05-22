
import { useContext } from "react"
import { getDron } from "../../Context/UserProvider"


export function Cards() {
  const{ data }=useContext(getDron)
  return data.map((dron)=> {
    return (
      <div key={dron.id}>
         <img src={dron.image} alt="" />
         <h3>{dron.name}</h3>
         <p>{dron.description}</p>
      </div>
    )
  })
  };
  










