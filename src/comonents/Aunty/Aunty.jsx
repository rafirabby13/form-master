import { useContext } from "react"
import Cousin from "../Cousin/Cousin.jsx"
import { MoneyContext } from "../Grandpa/Grandpa.jsx"

function Aunty() {
    const [money, setMoney] = useContext(MoneyContext)
  return (
    <div className="border-2 rounded-xl py-10 px-16  border-orange-600">Aunty
     <section>
        <Cousin name='nourin'></Cousin>
        <Cousin name='Fatema'></Cousin>
        </section>
        <p>Money : {money}</p>
        <button onClick={()=> setMoney(money+1000)}>Add 1000 Taka</button>
    </div>
   
  )
}

export default Aunty