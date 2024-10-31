import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty.jsx";
import Dad from "../Dad/Dad.jsx";
import Uncle from "../Uncle/Uncle.jsx";

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);
const Grandpa = () => {

    const [money, setMoney] = useState(1000)
  const asset = "ring";
  return (
    <div className="flex flex-col gap-5 border-2 p-10">
      <h2>Grandpa</h2>
      <h1>Balance: {money}</h1>
      <MoneyContext.Provider value={[money, setMoney]}>
      <AssetContext.Provider value="Gold">
        <div className="  p-10 flex gap-4">
          <Dad asset={asset}></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </div>
      </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * create a context and export it
 * Add Provider for the context with value
 */
