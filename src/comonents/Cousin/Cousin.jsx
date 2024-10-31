/* eslint-disable react/prop-types */

import { useContext } from "react"
import { AssetContext } from "../Grandpa/Grandpa.jsx";
import Friends from "../Friends/Friends.jsx";

function Cousin({name}) {
    const gold = useContext(AssetContext);
  return (
    <div className="border-2 rounded-xl border-orange-700 p-3">
        <div>
        Cousin: {gold}
        </div>
       <Friends></Friends>
    </div>
  )
}

export default Cousin