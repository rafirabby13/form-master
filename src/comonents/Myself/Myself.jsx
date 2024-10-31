/* eslint-disable react/prop-types */
import Special from "../Special/Special.jsx"

function Myself({asset}) {
  return (
    <div className="border-2 rounded-xl border-orange-700 p-3">Myself
    <section className="border-2 rounded-xl p-3  border-orange-600">
        <Special asset={asset}></Special>
    </section>
    </div>
  )
}

export default Myself