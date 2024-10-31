import { useContext } from "react"
import { MoneyContext } from "../Grandpa/Grandpa.jsx"

function Brother() {
    const [money] = useContext(MoneyContext)
  return (
    <div className="border-2 rounded-xl border-orange-700 p-3">Brother
    <p>Grandpa : {money}</p>
    </div>
  )
}

export default Brother