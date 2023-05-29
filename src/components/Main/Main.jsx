
import { useContext } from "react"
import { getDron } from "../../Context/UserProvider"
import { CardGrid } from './CardGrid'



export function Main() {
  const { data } = useContext(getDron)
  return data.map((dron) => {
    return (

      <div>
        <CardGrid />
      </div>

    )
  })
};


