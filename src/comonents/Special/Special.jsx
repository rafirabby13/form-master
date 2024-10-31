import React, { useCallback, useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa.jsx";

function Special({ asset }) {
  const gift = useContext(AssetContext);
  return (
    <div>
      <div>Special Person: {asset}</div>
      <div>Special Person: {gift}</div>
    </div>
  );
}

export default Special;
