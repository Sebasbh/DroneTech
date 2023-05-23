
import { useContext } from "react"
import { getDron } from "../../Context/UserProvider"
import{CardGrid} from './CardGrid'



export function Main() {
const{ data }=useContext(getDron)
return data.map((dron)=> {
  return (
    
  <div>
     <CardGrid />
   </div>
     //<Link to="/imagen"><img src={dron.image} alt="" /></Link>
    //<Link className="H3" to={"/imagen/"}><h2>❤️</h2></Link>
    
  )
})
};


