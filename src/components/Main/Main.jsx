
import { useContext } from "react"
import { getDron } from "../../Context/UserProvider"
import { Cards } from './Cards'



export function Main() {
  const { data } = useContext(getDron)
  return data.map((dron) => {
    return (

      <div>
        <Cards />
      </div>

    )
  })
};


